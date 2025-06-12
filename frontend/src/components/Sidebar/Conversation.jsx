import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-3 items-center rounded-xl p-3 cursor-pointer transition-all duration-200 shadow-sm
          ${isSelected ? "bg-gradient-to-r from-blue-500/80 to-blue-700/80" : "hover:bg-blue-400/30 bg-white/10"}
        `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`relative`}>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400 shadow-md bg-white/30">
            <img
              src={conversation.profilePic}
              alt="user avatar"
              className="w-full h-full object-cover"
            />
          </div>
          {isOnline && (
            <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-white shadow" />
          )}
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 justify-between items-center">
            <p className="font-semibold text-gray-100 truncate">{conversation.fullName}</p>
            <span className="text-2xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1 bg-gradient-to-r from-blue-400/10 to-transparent" />}
    </>
  );
};

export default Conversation;