import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Hello! I am N11 AI. How can I help you dominate the search results today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages.slice(1) // skip the initial greeting for history
        })
      });
      const data = await response.json();
      if (data.text) {
        setMessages((prev) => [...prev, { role: 'model', content: data.text }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [...prev, { role: 'model', content: 'Sorry, I encountered an error. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-8 right-8 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_20px_50px_rgba(124,58,237,0.4)] transition-opacity",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <MessageSquare className="h-8 w-8" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">1</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-[70] w-[95vw] overflow-hidden rounded-[2rem] glass-dark border-white/10 shadow-2xl sm:w-96"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 p-6 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue text-white">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white leading-none">N11 AI</h3>
                  <span className="text-[10px] uppercase font-bold text-brand-blue tracking-tighter">Online & Ready</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="h-96 overflow-y-auto p-6 space-y-4 scroll-smooth">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex gap-3", msg.role === 'user' ? "flex-row-reverse" : "")}>
                  <div className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                    msg.role === 'user' ? "bg-brand-purple" : "bg-white/10"
                  )}>
                    {msg.role === 'user' ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
                  </div>
                  <div className={cn(
                    "max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed",
                    msg.role === 'user' ? "bg-brand-purple/20 text-white rounded-tr-none" : "bg-white/5 text-gray-300 rounded-tl-none"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="bg-white/5 rounded-2xl rounded-tl-none p-4 text-gray-400">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-6 pt-0">
               <div className="relative group">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about SEO, Web Dev..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm text-white outline-none focus:border-brand-blue group-focus-within:bg-white/10 transition-all"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-2 h-10 w-10 flex items-center justify-center rounded-xl bg-brand-blue text-white hover:bg-brand-purple transition-colors disabled:opacity-50"
                  >
                    <Send className="h-5 w-5" />
                  </button>
               </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
