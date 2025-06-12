import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utlis/extractTime';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatAlign = fromMe ? 'justify-end' : 'justify-start';
  const bubbleBg = fromMe
    ? 'bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 text-white'
    : 'bg-white/80 text-gray-800 border border-blue-100';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? 'animate-shake' : '';

  return (
    <div className={`flex ${chatAlign} mb-2`}>
      {!fromMe && (
        <div className="flex-shrink-0 mr-2">
          <img
            src={profilePic}
            alt="user avatar"
            className="w-9 h-9 rounded-full shadow-md border-2 border-blue-300 object-cover"
          />
        </div>
      )}
      <div className="flex flex-col max-w-[70%]">
        <div
          className={`rounded-2xl px-4 py-2 shadow-md ${bubbleBg} ${shakeClass} transition-transform duration-200`}
        >
          {message.message}
        </div>
        <span className={`text-xs mt-1 ${fromMe ? 'text-blue-400 text-right' : 'text-gray-700 text-left'}`}>
          {formattedTime}
        </span>
      </div>
      {fromMe && (
        <div className="flex-shrink-0 ml-2">
          <img
            src={profilePic}
            alt="user avatar"
            className="w-9 h-9 rounded-full shadow-md border-2 border-blue-400 object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Message;

/*
import React from 'react'
import{useAuthContext} from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utlis/extractTime';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} =  useConversation();
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500':"";
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "" ;


  return (
    <div className={`chat${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img  src= {profilePic} 
                alt="tailwind CSS chat bubble component" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2 `}>
            {message.message}
        </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
          {formattedTime}
        </div>
      
    </div>
  )
}

export default Message

*/
