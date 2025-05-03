'use client';
import { FC, useState } from 'react';
import FloatingChatButton from '@/ui/view/bridge/bridge-content/floating-chat/floating-chat-button';
import ChatContent from '@/ui/view/bridge/bridge-content/floating-chat/chat-content';
import { AnimatePresence, motion } from 'framer-motion';

export type MessageType = {
  id: number;
  text: string;
  time: string;
};

const FloatingChat: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <AnimatePresence>
        {!isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <FloatingChatButton onClick={toggleModal} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              opacity: 0,
              y: 0,
              x: 0,
              scale: 0,
              transformOrigin: 'bottom right',
            }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: 0,
              x: 0,
              scale: 0,
              transformOrigin: 'bottom right',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed md:bottom-6 right-0 md:right-6 z-50"
          >
            <ChatContent toggleModal={toggleModal} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChat;
