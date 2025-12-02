import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, ChevronDown } from 'lucide-react';
import Button from './Button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! 👋 I'm the Laptop Gurus AI Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('charge')) {
      return "Our diagnostic service starts at ₹500. Final repair costs depend on the specific issue (Screen, Battery, Logic Board, etc.). We provide a transparent estimate after diagnosis.";
    }
    if (lowerInput.includes('location') || lowerInput.includes('address') || lowerInput.includes('where')) {
      return "We are located at 23 Pari Nagar Gandhi Street, Chennai. TN 600 083.";
    }
    if (lowerInput.includes('phone') || lowerInput.includes('call') || lowerInput.includes('number')) {
      return "You can reach our senior technicians at 9445 234 369.";
    }
    if (lowerInput.includes('book') || lowerInput.includes('appointment') || lowerInput.includes('repair')) {
      return "Great! You can book a service using the form on our website. Would you like me to scroll you to the booking section?";
    }
    if (lowerInput.includes('mac') || lowerInput.includes('apple')) {
      return "We are specialists in Mac repairs! From M1/M2/M3 Logic Boards to screens and liquid damage, we handle it all.";
    }
    
    return "I can help connect you with a senior technician. Please fill out the booking form below or call us directly for immediate assistance!";
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Check for special actions (scrolling)
    if (inputText.toLowerCase().includes('book') || inputText.toLowerCase().includes('appointment')) {
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1500);
    }

    // Simulate network delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  const handleQuickAction = (action: string) => {
    setInputText(action);
    // Use a timeout to allow the state to update before sending (or just call logic directly)
    // Here we'll just set it and let the user press send, or we could auto-send:
    // For smoother UX, let's auto-send but I'll implement a separate trigger function or just mimic handleSend
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: action,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    setTimeout(() => {
       const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(action),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-[350px] max-w-[calc(100vw-3rem)] bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ height: '500px', maxHeight: '70vh' }}
          >
            {/* Header */}
            <div className="bg-slate-900/50 backdrop-blur-md p-4 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-slate-900 shadow-lg">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Laptop Gurus AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-emerald-400 font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full text-textMuted hover:text-white transition-colors"
              >
                <ChevronDown size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-primary text-slate-900 rounded-tr-sm font-medium'
                        : 'bg-surface border border-white/10 text-textMain rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-surface border border-white/10 p-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-textMuted/50 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-textMuted/50 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-textMuted/50 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions (only show if not typing and last message was bot) */}
            {!isTyping && messages[messages.length - 1].sender === 'bot' && (
              <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
                {['Book Repair', 'Pricing?', 'Location', 'Mac Support'].map((action) => (
                  <button
                    key={action}
                    onClick={() => handleQuickAction(action)}
                    className="flex-shrink-0 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs text-primary transition-colors whitespace-nowrap"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-surface/50 border-t border-white/5">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask about repairs..."
                  className="flex-1 bg-background border border-white/10 rounded-full px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-textMuted/50"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="p-2.5 bg-primary text-slate-900 rounded-full hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-primary/20"
                >
                  <Send size={18} className={inputText.trim() ? 'ml-0.5' : ''} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-primary/30 transition-all duration-300 ${
            isOpen ? 'bg-slate-700 text-white rotate-90' : 'bg-gradient-to-r from-primary to-secondary text-slate-900'
        }`}
      >
        {isOpen ? <X size={28} /> : <Sparkles size={28} className="animate-pulse" />}
        
        {/* Notification Dot */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-background rounded-full animate-bounce" />
        )}
      </motion.button>
    </div>
  );
};

export default AIChatWidget;
