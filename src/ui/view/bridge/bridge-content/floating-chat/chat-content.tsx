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
  toggleModal: () => any;
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
    if (!input.trim()) return null;

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

      return null;
    } finally {
      setLoading(false);
    }

    return null;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="inset-0 rounded-xl flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-screen h-dvh md:max-w-sm md:h-[40rem] flex flex-col bg-tertiary text-white rounded-lg overflow-hidden shadow-xl transform transition-all">
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
            onClick={() => void sendMessage()}
            className="ml-2 p-2  aspect-square bg-primary rounded-full disabled:opacity-50"
            disabled={loading}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {!loading ? (
                <NextIcon />
              ) : (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-[14px] h-[14px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
