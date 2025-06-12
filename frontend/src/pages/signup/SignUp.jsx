import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';
import useSignup from '../../hooks/useSignup';
import { BsEye, BsEyeSlash } from "react-icons/bs";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-blue-900/60 via-blue-700/40 to-slate-800/60 backdrop-blur-lg border border-white/20">
        <h1 className="text-4xl font-extrabold text-center text-blue-400 mb-2 tracking-wide drop-shadow">
          Sign Up <span className="text-white font-bold">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-blue-200">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full h-11 rounded-full bg-white/80 text-gray-800 placeholder-gray-400 border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all px-5 shadow-md outline-none"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              autoComplete="name"
              disabled={loading}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-blue-200">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full h-11 rounded-full bg-white/80 text-gray-800 placeholder-gray-400 border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all px-5 shadow-md outline-none"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
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
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                autoComplete="new-password"
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
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-blue-200">Confirm Password</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="input input-bordered w-full h-11 rounded-full bg-white/80 text-gray-800 placeholder-gray-400 border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all px-5 shadow-md outline-none pr-12"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                autoComplete="new-password"
                disabled={loading}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-700 focus:outline-none"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                tabIndex={-1}
              >
                {showConfirmPassword ? <BsEyeSlash size={22} /> : <BsEye size={22} />}
              </button>
            </div>
          </div>
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-500 mt-4 inline-block transition-all"
          >
            Already have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-md mt-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold shadow-lg transition-all duration-200"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner w-5 h-5"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;