import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const Input = ({ 
  label, 
  placeholder, 
  type = "text", 
  value, 
  onChange, 
  required = false,
  error 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const isPasswordField = type === "password";
  const inputType = isPasswordField && showPassword ? "text" : type;

  return (
    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full px-3 py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm ${
            error ? 'border-red-500' : 'border-gray-300'
          } ${isPasswordField ? 'pr-10' : ''}`}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {showPassword ? (
              <Eye size={18} />
            ) : (
              <EyeOff size={18} />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

export default Input 