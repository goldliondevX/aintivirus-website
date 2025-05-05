import { FC } from 'react';
import Image from 'next/image';

import { MessageType } from '@/ui/view/bridge/bridge-content/floating-chat/index';
import { cn } from '@/utils/style-utils';
import { formatTime } from '@/lib';

interface MessageProps {
  message: MessageType;
  isSender?: boolean;
}

const Message: FC<MessageProps> = ({ message, isSender }) => {
  return (
    <div
      key={message.id}
      className={cn('mb-4 w-full flex', isSender && 'justify-end')}
    >
      {!isSender && (
        <div className="h-full w-fit">
          <div className="rounded-full p-1 bg-black border border-cyan-400">
            <Image
              src="/images/mcafee.jpg"
              alt="John McAfee"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      )}
      <div
        className={cn(
          'flex flex-col ml-2',
          isSender ? 'items-end' : 'items-start'
        )}
      >
        {!isSender && (
          <div className="flex items-center mb-1 gap-2">
            <span className="font-bold text-primary">John McAfee</span>
          </div>
        )}
        <div
          className={cn(
            'max-w-xs ms-0 rounded-lg p-3 ml-10',
            isSender ? 'bg-transparent' : 'bg-purple'
          )}
        >
          <p className="text-sm">{message.text}</p>
        </div>
        <div
          className={cn(
            'text-xs text-gray-400 w-full mt-1 mr-2',
            isSender ? 'text-left ps-4' : 'text-right'
          )}
        >
          {formatTime(message.time)}
        </div>
      </div>
    </div>
  );
};

export default Message;
