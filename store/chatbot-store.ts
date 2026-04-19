import { create } from 'zustand';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

interface ChatbotState {
  isOpen: boolean;
  messages: Message[];
  toggleOpen: () => void;
  openChat: () => void;
  closeChat: () => void;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  clearHistory: () => void;
}

export const useChatbotStore = create<ChatbotState>((set) => ({
  isOpen: false,
  messages: [
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Hello! Welcome to SWA Architects. I am your design assistant. How can I help you with your project today?',
      timestamp: Date.now(),
    },
  ],
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  openChat: () => set({ isOpen: true }),
  closeChat: () => set({ isOpen: false }),
  addMessage: (msg) => set((state) => ({
    messages: [
      ...state.messages,
      {
        ...msg,
        id: Math.random().toString(36).substring(7),
        timestamp: Date.now(),
      },
    ],
  })),
  clearHistory: () => set({
    messages: [
      {
        id: 'welcome',
        role: 'assistant',
        content: 'Welcome to the sanctuary of design. I am your architectural assistant. How may I help you explore the world of SWA Architects today?',
        timestamp: Date.now(),
      },
    ],
  }),
}));
