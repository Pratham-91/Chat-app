import React from 'react';
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto flex items-center justify-center py-3">
      {!loading ? (
        <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold shadow-md transition-all duration-200 focus:outline-none"
        >
          <BiLogOut className="w-6 h-6" />
          <span className="hidden md:inline">Logout</span>
        </button>
      ) : (
        <span className="loading loading-spinner w-6 h-6 text-blue-500"></span>
      )}
    </div>
  );
};

export default LogoutButton;