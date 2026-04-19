"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChatbotStore } from "@/store/chatbot-store";
import { processChatMessage } from "@/lib/chat-api";
import { 
  ChatTeardropText, 
  X, 
  PaperPlaneTilt, 
  ArrowClockwise,
  User,
  Sparkle
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export function Chatbot() {
  const { isOpen, toggleOpen, messages, addMessage, clearHistory } = useChatbotStore();
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue;
    addMessage({ role: "user", content: userMessage });
    setInputValue("");
    
    try {
      const response = await processChatMessage(userMessage);
      setTimeout(() => {
        addMessage({ 
          role: "assistant", 
          content: response.content 
        });
        
        // Handle actions like WhatsApp or Calculator
        if (response.action === "contact_inquiry") {
          setTimeout(() => {
            addMessage({
              role: "assistant",
              content: "You can reach us directly on WhatsApp here: https://wa.me/917738700860"
            });
          }, 800);
        }
      }, 600);
    } catch (error) {
      console.error("Chat error:", error);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="mb-4 w-[380px] h-[520px] overflow-hidden rounded-2xl border border-secondary/30 bg-canvas/80 shadow-2xl backdrop-blur-xl flex flex-col"
          >
            {/* Header */}
            <div className="p-5 border-b border-secondary/20 flex items-center justify-between bg-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-canvas">
                  <Sparkle size={22} weight="fill" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-structure leading-none">SWA Design Bot</h3>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-medium">Online Now</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={clearHistory}
                  className="p-2 hover:bg-secondary/10 rounded-full text-structure/60 transition-colors"
                  title="Clear History"
                >
                  <ArrowClockwise size={20} />
                </button>
                <button 
                  onClick={toggleOpen}
                  className="p-2 hover:bg-secondary/10 rounded-full text-structure/60 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              data-lenis-prevent
              className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-secondary/20 overscroll-contain"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    msg.role === "user" ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div className={cn(
                    "p-3.5 rounded-2xl text-sm leading-relaxed",
                    msg.role === "user" 
                      ? "bg-primary text-canvas rounded-tr-none" 
                      : "bg-secondary/10 text-structure rounded-tl-none border border-secondary/20"
                  )}>
                    {msg.content}
                  </div>
                  <span className="mt-1 text-[10px] text-structure/40 px-1 italic font-sans">
                    {msg.role === "user" ? "You" : "Assistant"}
                  </span>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-secondary/20 bg-white/5">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="How can we help?"
                  className="w-full bg-secondary/10 border border-secondary/20 rounded-full py-3 px-5 pr-12 text-sm text-structure focus:outline-none focus:ring-1 focus:ring-primary/40 placeholder:text-structure/40 font-sans transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="absolute right-2 p-2 bg-primary text-canvas rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
                >
                  <PaperPlaneTilt size={18} weight="fill" />
                </button>
              </div>
              <p className="mt-2 text-center text-[9px] text-structure/30 font-sans tracking-wide">
                Architecture & Interior Design Studio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        onClick={toggleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group relative",
          isOpen ? "bg-structure text-canvas rotate-90" : "bg-primary text-canvas"
        )}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <ChatTeardropText size={28} weight="fill" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulsing state - only shown when closed */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent flex items-center justify-center rounded-full border-2 border-canvas">
             <span className="w-1.5 h-1.5 bg-structure rounded-full animate-pulse" />
          </span>
        )}
      </motion.button>
    </div>
  );
}
