import { FC, HTMLAttributes } from 'react';
import Image from 'next/image';

interface FloatingChatButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const FloatingChatButton: FC<FloatingChatButtonProps> = ({ ...props }) => {
  return (
    <button
      className="fixed bottom-6 right-6 z-50 animate-float-glow transition-transform duration-300 hover:scale-110"
      {...props}
    >
      <div className="rounded-full p-1 bg-black shadow-[0_0_30px_5px_#35CEEE] animate-pulse border-2 border-cyan-400">
        <Image
          src="/images/mcafee.jpg"
          alt="John McAfee"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
    </button>
  );
};

export default FloatingChatButton;
