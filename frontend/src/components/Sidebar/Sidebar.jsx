import React from 'react';
import SearchInput from './SearchInput';
import LogoutButton from './LogoutButton';
import Conversations from './Conversations';

const Sidebar = () => {
  return (
    <aside className="border-r border-slate-500 bg-gradient-to-b from-blue-900/40 via-slate-800/40 to-blue-700/20 p-4 flex flex-col min-h-0 h-full min-w-[270px] max-w-xs rounded-l-2xl shadow-xl overflow-y-auto custom-scrollbar">      <div className="mb-4">
        <SearchInput />
      </div>
      <div className="divider px-3 my-2" />
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <Conversations />
      </div>
      <LogoutButton />
    </aside>
  );
};

export default Sidebar;