'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bot, SendHorizonal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { faqMap, FaqKey, InfoLevel } from '../lib/faqmap';
import { useViewMode } from '../context/ViewModeContext';

export function findAnswer(input: string, mode: InfoLevel): string | null {
  const lower = input.toLowerCase().trim();

  const match = Object.keys(faqMap).find((key): key is FaqKey => lower.includes(key));

  return match ? faqMap[match][mode] : null;
}

function vibrate(ms: number = 15) {
  if (typeof window !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(ms);
  }
}

const suggestionMap: Record<string, string> = {
  '/cx-edge': 'What does CX-Edge do for our customers?',
  '/hatteras': 'How does Hatteras improve security workflows?',
  '/semantic-edge': 'What kind of data does Semantic-Edge analyze?',
  '/sentinel': 'How can Sentinel help with threat detection?',
  '/mixed-reality': 'What ways do you use mixed reality?',
};

export default function Chatbot() {
  const pathname = usePathname();
  const { mode } = useViewMode();

  const [suggestion, setSuggestion] = useState('');

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const titleMap: Record<string, string> = {
    '/': 'oLabs Assistant',
    '/cx-edge': 'CX-Edge Assistant',
    '/hatteras': 'Hatteras Assistant',
    '/semantic-edge': 'Semantic-Edge Assistant',
    '/sentinel': 'Sentinel Assistant',
    '/mixed-reality': 'Mixed Reality Assistant',
  };

  const baseTitle = titleMap[pathname] || 'oLabs Assistant';

  useEffect(() => {
    const mapped = suggestionMap[pathname] || 'Hi! How can I help you explore oLabs?';
    setSuggestion(mapped);

    // If chatbot is open, update the input immediately with the latest suggestion
    if (open) {
      setInput(mapped);
    }
  }, [pathname, open]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // 🔍 Check hardcoded answers first
    const cannedReply = findAnswer(input, mode);
    if (cannedReply) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: 'bot', text: cannedReply }]);
      }, 300);
      return;
    }

    // Otherwise → send to OpenAI
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: 'You are oLabs Assistant...',
            },
            ...newMessages.map((m) => ({
              role: m.role,
              content: m.text,
            })),
          ],
        }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'bot', text: data.text }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: 'Sorry, something went wrong. Please try again.' },
      ]);
    }
  };

  const hasInitializedRef = useRef(false);

  useEffect(() => {
    if (open && !hasInitializedRef.current) {
      setInput(suggestion); // Pre-fill input
      hasInitializedRef.current = true;
    }

    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [open, suggestion]);

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          key="chat-button"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button
            onClick={() => {
              vibrate(15);
              setMessages([]);
              setOpen(true); // This will trigger the suggestion effect
            }}
            aria-label="Open Chatbot"
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
            animate={{
              x: [0, 2, -2, 1, -1, 0],
              y: [0, -1, 1, -2, 2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Bot size={24} />
          </motion.button>
        </motion.div>
      )}

      {open && (
        <motion.div
          key="chat-window"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 w-[90vw] max-w-sm bg-zinc-900 border-2 border-blue-600 rounded-xl shadow-xl flex flex-col overflow-hidden z-50"
        >
          <div className="flex justify-between items-center bg-zinc-800 px-4 py-2 border-b border-zinc-700">
            <h2 className="font-semibold text-lg text-white">
              {baseTitle}
              {mode === 'advanced' && <span className="text-blue-400"> Deep Dive</span>}
            </h2>

            <button
              onClick={() => {
                vibrate(15);
                setMessages([]); // Clear any old history
                setInput(suggestion); // Set new suggestion in the input field
                setOpen(false); // Open chatbot
              }}
              aria-label="Close Chat"
            >
              <X size={20} className="text-gray-400 hover:text-blue-500" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto max-h-96 text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[85%] ${
                  msg.role === 'user'
                    ? 'bg-zinc-700 text-right ml-auto text-white'
                    : 'bg-blue-900 text-left mr-auto text-blue-100'
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex border-t border-zinc-700 bg-zinc-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 text-sm bg-transparent text-white placeholder:text-zinc-400 focus:outline-none"
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="px-4 bg-blue-600 text-white hover:bg-blue-700 transition"
              aria-label="Send Message"
            >
              <SendHorizonal size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
