'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bot, SendHorizonal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
};

export default function Chatbot() {
  const pathname = usePathname();
  const suggestion = suggestionMap[pathname] || 'Hi! How can I help you explore oLabs?';

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'Thanks for your message! Someone from oLabs will be in touch.',
        },
      ]);
    }, 800);
  };

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'bot', text: suggestion }]);
    }

    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [open]);

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
              setOpen(true);
            }}
            aria-label="Open Chatbot"
            className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700"
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
          className="fixed bottom-6 right-6 w-[90vw] max-w-sm bg-zinc-900 border border-2 border-amber-600 rounded-xl shadow-xl flex flex-col overflow-hidden z-50"
        >
          <div className="flex justify-between items-center bg-zinc-800 px-4 py-2 border-b border-zinc-700">
            <h2 className="font-semibold text-white text-lg">oLabs Assistant</h2>
            <button
              onClick={() => {
                vibrate(10);
                setOpen(false);
                setMessages([]);
              }}
              aria-label="Close Chat"
            >
              <X size={20} className="text-gray-400 hover:text-orange-500" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto max-h-96 text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[85%] ${
                  msg.role === 'user'
                    ? 'bg-zinc-700 text-right ml-auto text-white'
                    : 'bg-orange-900 text-left mr-auto text-orange-100'
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
              className="px-4 bg-orange-600 text-white hover:bg-orange-700 transition"
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
