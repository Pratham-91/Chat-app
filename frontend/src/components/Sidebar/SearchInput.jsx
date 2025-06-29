import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error('Search term must be at least 3 characters long');
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };

  return (
    <form
      className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 shadow-md transition-all focus-within:ring-2 focus-within:ring-sky-400"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search users..."
        className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-400 px-2 py-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-500 hover:bg-sky-600 text-white shadow transition-all duration-200 flex items-center justify-center"
        aria-label="Search"
      >
        <IoSearchSharp className="w-6 h-6" />
      </button>
    </form>
  );
};

export default SearchInput;