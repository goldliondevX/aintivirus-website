'use client';

import { FC, useMemo, useState } from 'react';
import Image from 'next/image';

import CloseIcon from '@/ui/components/icons/close';
import Message from '@/ui/view/bridge/bridge-content/floating-chat/message';
import SmileIcon from '@/ui/components/icons/smile';
import ImageIcon from '@/ui/components/icons/image';
import NextIcon from '@/ui/components/icons/next';
import { sendMessageAction } from '@/lib/chat';

interface ChatMessage {
  id: number;
  text: string;
  time: number;
  sender: 'user' | 'assistant';
}

interface ChatContentProps {
  toggleModal: () => void;
}

const ChatContent: FC<ChatContentProps> = ({ toggleModal }) => {
  const [input, setInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: Date.now(),
      text: 'Hello! The internet is a jungle. Stay alert. Stay free. Let’s talk.',
      time: Date.now(),
      sender: 'assistant',
    },
  ]);
  const [loading, setLoading] = useState(false);

  const userId = useMemo(
    () => localStorage.getItem('chat-user-id') || crypto.randomUUID(),
    []
  );

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: input,
      time: Date.now(),
      sender: 'user',
    };

    setChatMessages((prev) => [userMessage, ...prev]);
    setInput('');
    setLoading(true);

    try {
      const replyText = await sendMessageAction(input, userId);
      const assistantReply: ChatMessage = {
        id: Date.now() + 1,
        text: replyText,
        time: Date.now(),
        sender: 'assistant',
      };
      setChatMessages((prev) => [assistantReply, ...prev]);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="inset-0 rounded-xl flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-screen h-screen md:max-w-sm md:h-[40rem] flex flex-col bg-tertiary text-white rounded-lg overflow-hidden shadow-xl transform transition-all">
        <div className="flex items-center justify-between p-4 border-b border-blue-800">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="rounded-full p-1 bg-black shadow-[0_0_15px_5px_#35CEEE] animate-pulse border-2 border-cyan-400">
                <Image
                  src="/images/mcafee.jpg"
                  alt="John McAfee"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold">John McAfee</h3>
          </div>
          <button
            onClick={toggleModal}
            className="p-1 rounded-full bg-gray-500/50 hover:bg-gray-500/30 transition-opacity"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col-reverse chat-scrollbar p-4 bg-secondary">
          {chatMessages.map((m) => (
            <Message key={m.id} message={m} isSender={m.sender === 'user'} />
          ))}
        </div>

        <div className="p-3 bg-secondary border-t border-blue-800 flex">
          <div className="flex-1 flex items-center rounded-full px-4">
            <button className="text-blue-300 mr-2">
              <span className="text-2xl">
                <SmileIcon />
              </span>
            </button>
            <input
              type="text"
              placeholder="Reply..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 w-32 bg-transparent border-none outline-none py-2 text-white placeholder-gray-400"
              disabled={loading}
            />
          </div>

          <button className="ml-2 p-2 rounded-full">
            <ImageIcon />
          </button>
          <button
            onClick={sendMessage}
            className="ml-2 p-2 py-0 px-4 aspect-square bg-primary rounded-full disabled:opacity-50"
            disabled={loading}
          >
            <NextIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
