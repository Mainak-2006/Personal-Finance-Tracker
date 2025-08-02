import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/Inputs/Input'
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelecter'
import { Link, useNavigate } from "react-router-dom"
import { validateEmail, validatePassword } from '../../utils/helper'

const SignUp = () => {

  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    setError("");
    //SignUp API Call
  }
  
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-3xl font-semibold text-black">Create an Account</h3>
        <p className="text-xl text-slate-700 mt-[5px] mb-4">
          Join us today by entering your details below.
        </p>
        <form onSubmit={handleSignUp} className="flex flex-col gap-3">
          <ProfilePhotoSelector
            label="Profile Picture"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.files[0])}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              type="text"
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <div className="mb-3 p-2 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 cursor-pointer font-medium text-sm"
          >
            SIGN UP
          </button>
          <p className="text-lg text-slate-700 font-semibold mt-2">
            Already have an account? <Link to="/login" className="text-purple-600 hover:text-purple-700 underline">Login</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp
