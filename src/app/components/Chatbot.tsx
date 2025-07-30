'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bot, SendHorizonal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown'; // at top of file

import { faqMap, FaqKey, generalFaqKeys, pageSpecificFaqMap } from '../lib/faqmap';
import { useViewMode } from '../context/ViewModeContext';

function vibrate(ms: number = 15) {
  if (typeof window !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(ms);
  }
}

export function findAnswer(input: string): string | null {
  const lower = input.toLowerCase().trim();

  // Normalize keys for matching
  const match = Object.entries(faqMap).find(([key]) => lower.includes(key.toLowerCase()));

  return match ? match[1].basic : null;
}

export default function Chatbot() {
  const pathname = usePathname();
  const { mode } = useViewMode();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);

  const titleMap: Record<string, string> = {
    '/': 'oLabs Assistant',
    '/cxedge': 'CX-Edge Assistant',
    '/hatteras': 'Hatteras Assistant',
    '/semantic-edge': 'Semantic Edge Assistant',
    '/sentinel': 'Sentinel Assistant',
    '/echonet': 'Echonet Assistant',
    '/mixed-reality': 'Mixed Reality Assistant',
  };
  const baseTitle = titleMap[pathname] || 'oLabs Assistant';

  const filteredFaqs: FaqKey[] =
    pathname === '/' ? generalFaqKeys : pageSpecificFaqMap[pathname] || [];

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Try canned reply
    const cannedReply = findAnswer(input);
    if (cannedReply) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: 'bot', text: cannedReply }]);
      }, 300);
      return;
    }

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
    const suggested =
      pathname === '/'
        ? 'Hi! How can I help you explore oLabs?'
        : findAnswer(filteredFaqs[0] || '') || '';

    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [open, pathname, filteredFaqs]);

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
              vibrate();
              setMessages([]);
              setOpen(true);
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
            <h2 className="font-semibold text-lg text-white">{baseTitle}</h2>

            <button
              onClick={() => {
                vibrate();
                setMessages([]);
                setOpen(false);
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
                {msg.role === 'bot' ? (
                  <ReactMarkdown
                    components={{
                      a: ({ node, ...props }) => (
                        <a
                          {...props}
                          className="inline-flex items-center gap-1 text-blue-300 underline hover:text-white"
                        >
                          {props.children}
                          <span aria-hidden>🔗</span>
                        </a>
                      ),
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                ) : (
                  msg.text
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-zinc-700 bg-zinc-800 p-2 space-y-2">
            {hasMounted && filteredFaqs.length > 0 && (
              <select
                key={pathname}
                onChange={(e) => {
                  const selected = e.target.value as FaqKey;
                  if (!selected) return;

                  setMessages((prev) => [...prev, { role: 'user', text: selected }]);

                  const cannedReply = findAnswer(selected);
                  if (cannedReply) {
                    setTimeout(() => {
                      setMessages((prev) => [...prev, { role: 'bot', text: cannedReply }]);
                    }, 300);
                  } else {
                    fetch('/api/chat', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        messages: [
                          { role: 'system', content: 'You are oLabs Assistant...' },
                          ...messages,
                          { role: 'user', text: selected },
                        ],
                      }),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        setMessages((prev) => [...prev, { role: 'bot', text: data.text }]);
                      })
                      .catch(() => {
                        setMessages((prev) => [
                          ...prev,
                          { role: 'bot', text: 'Sorry, something went wrong. Please try again.' },
                        ]);
                      });
                  }

                  e.target.selectedIndex = 0; // reset dropdown
                }}
                className="w-full bg-zinc-700 text-white text-sm p-2 rounded focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  🔍 Choose a frequently asked question...
                </option>
                {filteredFaqs.map((key) => (
                  <option key={key} value={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </option>
                ))}
              </select>
            )}

            <div className="flex">
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
