import { useAuthContext } from './context/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import './App.css';

// Custom SVG Logo Component
const ChatAppLogo = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <defs>
      <linearGradient id="chat-gradient" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3b82f6"/>
        <stop offset="1" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
    <rect width="44" height="44" rx="12" fill="url(#chat-gradient)" />
    <ellipse cx="22" cy="22" rx="12" ry="10" fill="#fff" opacity="0.9"/>
    <ellipse cx="17" cy="22" rx="2" ry="2" fill="#3b82f6"/>
    <ellipse cx="22" cy="22" rx="2" ry="2" fill="#3b82f6"/>
    <ellipse cx="27" cy="22" rx="2" ry="2" fill="#3b82f6"/>
    <path d="M12 32c2 0 6-2 10-2s8 2 10 2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

function App() {
  const { authUser } = useAuthContext();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(120deg, rgba(20,30,48,0.97) 0%, rgba(36,37,130,0.97) 100%), url('https://www.transparenttextures.com/patterns/cubes.png')",
        backgroundRepeat: "repeat, repeat",
        backgroundSize: "cover, auto",
        backgroundPosition: "center, center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header */}
      <header className="w-full py-4 px-4 bg-white/10 backdrop-blur-md shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ChatAppLogo />
          <span className="text-2xl md:text-3xl font-extrabold text-blue-400 tracking-wide drop-shadow">ChatApp</span>
        </div>
        <span className="hidden md:block text-gray-200 text-base font-light">Connect. Chat. Enjoy.</span>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center w-full px-2 overflow-auto">
        <div className="w-full max-w-5xl mx-auto p-4 md:p-8 rounded-2xl shadow-2xl bg-white/20 backdrop-blur-lg">
          <Routes>
            <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
            <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
            <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-3 px-4 bg-white/10 backdrop-blur-md shadow-inner flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="text-gray-300 text-xs md:text-sm">&copy; {new Date().getFullYear()} ChatApp. All rights reserved.</span>
        <span className="text-gray-400 text-xs">Made with <span className="text-red-400">♥</span> by Pratham Gupta</span>
      </footer>

      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
    </div>
  );
}

export default App;