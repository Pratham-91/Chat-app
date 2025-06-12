import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    console.log("login called with ", username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-blue-900/60 via-blue-700/40 to-slate-800/60 backdrop-blur-lg border border-white/20">
        <h1 className="text-4xl font-extrabold text-center text-blue-400 mb-2 tracking-wide drop-shadow">
          Login <span className="text-white font-bold">ChatApp</span>
        </h1>
        <p className="text-center text-gray-300 mb-6">Welcome back! Please login to continue.</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-blue-200">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full h-11 rounded-full bg-white/80 text-gray-800 placeholder-gray-400 border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all px-5 shadow-md outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              disabled={loading}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-blue-200">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="input input-bordered w-full h-11 rounded-full bg-white/80 text-gray-800 placeholder-gray-400 border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all px-5 shadow-md outline-none pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                disabled={loading}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-700 focus:outline-none"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1}
              >
                {showPassword ? <BsEyeSlash size={22} /> : <BsEye size={22} />}
              </button>
            </div>
          </div>
          <Link
            to={'/signup'}
            className="text-sm text-blue-300 hover:underline hover:text-blue-500 mt-2 inline-block transition-all"
          >
            Don't have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-md mt-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold shadow-lg transition-all duration-200"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner w-5 h-5"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;