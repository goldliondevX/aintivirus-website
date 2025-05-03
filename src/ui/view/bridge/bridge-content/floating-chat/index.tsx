'use client';
import { FC, useState } from 'react';
import FloatingChatButton from '@/ui/view/bridge/bridge-content/floating-chat/floating-chat-button';
import Image from 'next/image';
import Message from '@/ui/view/bridge/bridge-content/floating-chat/message';
import SmileIcon from '@/ui/components/icons/smile';
import ImageIcon from '@/ui/components/icons/image';
import NextIcon from '@/ui/components/icons/next';
import CloseIcon from '@/ui/components/icons/close';

export type MessageType = {
  id: number;
  text: string;
  time: string;
};

const messages = [
  {
    id: 1,
    text: 'Hi there, Lorem ipsum dolor sit amet consectetur. Dolor felis nisi vel bibendum. Maecenas in gravida in enim. Imperdiet velit nisl mauris augue faucibus. Tellus nulla porta pharetra tempor feugiat leo tellus iaculis.',
    time: '08:16 AM',
  },
  {
    id: 2,
    text: 'Hi there, Hi there, Lorem ipsum dolor sit amet consectetur. Dolor felis nisi vel bibendum. Maecenas in gravida in enim. Imperdiet velit nisl mauris augue faucibus.',
    time: 'Just Now',
  },
  {
    id: 3,
    text: 'Hi there, Lorem ipsum dolor sit amet consectetur. Dolor felis nisi vel bibendum. Maecenas in gravida in enim. Imperdiet velit nisl mauris augue faucibus. Tellus nulla porta pharetra tempor feugiat leo tellus iaculis.',
    time: '08:16 AM',
  },
  {
    id: 4,
    text: 'Hi there, Hi there, Lorem ipsum dolor sit amet consectetur. Dolor felis nisi vel bibendum. Maecenas in gravida in enim. Imperdiet velit nisl mauris augue faucibus.',
    time: 'Just Now',
  },
  {
    id: 5,
    text: 'Hi there, Lorem ipsum dolor sit amet consectetur. Dolor felis nisi vel bibendum. Maecenas in gravida in enim. Imperdiet velit nisl mauris augue faucibus. Tellus nulla porta pharetra tempor feugiat leo tellus iaculis.',
    time: '08:16 AM',
  },
  {
    id: 6,
    text: 'Hi there, Hi there, Lorem ipsum dolor sit amet consectetur. Dolor felis nisi vel bibendum. Maecenas in gravida in enim. Imperdiet velit nisl mauris augue faucibus.',
    time: 'Just Now',
  },
  {
    id: 7,
    text: 'Hi there, Lorem ipsum dolor sit amet consectetur. Dolor felis nisi vel bibendum. Maecenas in gravida in enim. Imperdiet velit nisl mauris augue faucibus. Tellus nulla porta pharetra tempor feugiat leo tellus iaculis.',
    time: '08:16 AM',
  },
  {
    id: 8,
    text: 'Hi there, Hi there, Lorem ipsum dolor sit amet consectetur. Dolor felis nisi vel bibendum. Maecenas in gravida in enim. Imperdiet velit nisl mauris augue faucibus.',
    time: 'Just Now',
  },
];

const FloatingChat: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <FloatingChatButton onClick={toggleModal} />

      {isVisible && (
        <div className="fixed inset-0 rounded-lg flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-full w-screen h-screen lg:max-w-lg lg:h-[50rem] flex flex-col bg-tertiary text-white rounded-lg overflow-hidden shadow-xl transform transition-all">
            <div className="flex items-center justify-between p-4 border-b border-blue-800">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="rounded-full p-1 bg-black shadow-[0_0_30px_5px_#35CEEE] animate-pulse border-2 border-cyan-400">
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
              {messages.map((m, i) => (
                <Message key={m.id} message={m} isSender={i % 2 == 0} />
              ))}
            </div>

            <div className="p-3 bg-secondary border-t border-blue-800 flex">
              <div className="flex-1 flex items-center  rounded-full px-4">
                <button className="text-blue-300 mr-2">
                  <span className="text-2xl">
                    <SmileIcon />
                  </span>
                </button>
                <input
                  type="text"
                  placeholder="Reply..."
                  className="flex-1 bg-transparent border-none outline-none py-2 text-white placeholder-gray-400"
                />
              </div>

              <button className="ml-2 p-2 rounded-full">
                <ImageIcon />
              </button>
              <button className="ml-2 p-2 py-0 px-4 aspect-square bg-primary rounded-full">
                <NextIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChat;
