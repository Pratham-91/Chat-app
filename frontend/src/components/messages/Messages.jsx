import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  return (
    <div
      className="px-2 md:px-4 flex-1 overflow-y-auto custom-scrollbar  overflow-x-hidden bg-gradient-to-b from-white/10 via-blue-100/10 to-white/5 rounded-xl"
      style={{ maxHeight: '100%' }}
    >
      {!loading && messages.length > 0 && (
        <div className="flex flex-col gap-3 py-2 overflow-y-auto  overflow-x-hidden custom-scrollbar " style={{ maxHeight: "60vh" }}>
          {messages.map((message, idx) => (
            <div
              key={message._id}
              ref={idx === messages.length - 1 ? lastMessageRef : null}
              className="transition-transform duration-200 hover:scale-[1.01]"
            >
              <Message message={message} />
            </div>
          ))}
        </div>
      )}

      {loading && (
        <div className="flex flex-col gap-3 py-2">
          {[...Array(3)].map((_, idx) => (
            <MessageSkeleton key={idx} />
          ))}
        </div>
      )}

      {!loading && messages.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full py-8">
          <span className="text-4xl mb-2 text-blue-400 animate-bounce">💬</span>
          <p className="text-center text-gray-400 font-medium text-lg">
            Send a message to start the conversation
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;