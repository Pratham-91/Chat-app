import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utlis/emojis';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-3 flex-1 flex-col gap-1  custom-scrollbar" style={{ maxHeight: "60vh" }}>
      {conversations.length === 0 && !loading && (
        <div className="text-center text-gray-400 py-8 text-lg font-medium">
          No conversations yet. Start a new chat!
        </div>
      )}

      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading && (
        <div className="flex justify-center py-4">
          <span className="loading loading-spinner w-8 h-8 text-blue-400"></span>
        </div>
      )}
    </div>
  );
};

export default Conversations;