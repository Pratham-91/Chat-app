import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col h-full bg-gradient-to-br from-white/10 via-blue-100/10 to-white/5 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-lg transition-all duration-300 custom-scrollbar ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="flex items-center justify-center gap-4 bg-gradient-to-r from-blue-500/70 to-blue-700/80 px-8 py-6 rounded-t-3xl shadow-lg">
            <div className="w-14 h-14 rounded-full bg-white/40 flex items-center justify-center font-extrabold text-blue-800 text-3xl shadow-lg border-2 border-blue-400">
              {selectedConversation.fullName[0]}
            </div>
            <div className="flex flex-col items-center overflow-y-auto custom-scrollbar">
              <span className="block text-xs text-gray-200 mb-1">To:</span>
              <span className="text-xl font-bold text-white tracking-wide">{selectedConversation.fullName}</span>
            </div>
          </div>
          {/* Messages */}
          <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar px-4 py-3">
            <Messages />
          </div>
          {/* Input */}
          <div className="px-6 py-4 bg-white/30 rounded-b-3xl shadow-inner flex items-center justify-center">
            <div className="w-full max-w-xl">
              <MessageInput />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-2xl text-gray-200 font-semibold flex flex-col items-center gap-5">
        <p>
          Welcome <span className="text-blue-400">{authUser.fullName}</span>
        </p>
        <p className="text-gray-300 text-base md:text-lg">Select a chat to start messaging</p>
        <TiMessages className="text-6xl md:text-8xl text-blue-400 drop-shadow-xl animate-bounce" />
      </div>
    </div>
  );
};