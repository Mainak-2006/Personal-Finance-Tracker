import React, { useState, useRef } from 'react'
import { Camera, X ,Trash2} from 'lucide-react'

const ProfilePhotoSelector = ({ 
  label = "Profile Picture", 
  value, 
  onChange, 
  required = false,
  error 
}) => {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      
      // Call parent onChange
      onChange(e);
    }
  };

  const handleRemovePhoto = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    // Create a synthetic event to clear the value
    const syntheticEvent = {
      target: {
        files: [],
        value: ''
      }
    };
    onChange(syntheticEvent);
  };

  return (
    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-900 mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      
      <div className="flex items-center space-x-3">
        {/* Profile Picture Preview */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-2 border-gray-300 overflow-hidden bg-gray-100 flex items-center justify-center">
            {preview ? (
              <img 
                src={preview} 
                alt="Profile preview" 
                className="w-full h-full object-cover"
              />
            ) : (
              <Camera size={20} className="text-gray-400" />
            )}
          </div>
          
          {/* Remove button */}
          {preview && (
            <button
              type="button"
              onClick={handleRemovePhoto}
              className="absolute -top-1 -right-1 cursor-pointer bg-red-500 text-white rounded-full p-0.5 hover:bg-red-600 transition-colors"
            >
              <Trash2 size={14} />
            </button>
          )}
        </div>

        {/* File Input */}
        <div className="flex-1">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="profile-photo-input"
          />
          <label
            htmlFor="profile-photo-input"
            className="cursor-pointer inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
          >
            <Camera size={14} className="mr-1.5" />
            {preview ? 'Change Photo' : 'Upload Photo'}
          </label>
          <p className="text-xs text-gray-900 mt-1">
            JPG, PNG or GIF (max. 5MB)
          </p>
        </div>
      </div>
      
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

export default ProfilePhotoSelector
