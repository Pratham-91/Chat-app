import React, { useState } from 'react';
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-2 md:px-4 py-2" onSubmit={handleSubmit}>
      <div className="relative flex items-center">
        <input
          type="text"
          className="w-full rounded-full bg-white/80 text-gray-800 placeholder-gray-400 border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all px-5 py-2 pr-12 shadow-md outline-none"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
          autoComplete="off"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow transition-all duration-200 flex items-center justify-center disabled:opacity-60"
          disabled={loading || !message.trim()}
          aria-label="Send"
        >
          {loading ? (
            <div className="loading loading-spinner w-5 h-5" />
          ) : (
            <BsSend className="w-5 h-5" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;