// src/components/ProfileManagement.js
import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/storage';

const ProfileManagement = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  // Load profile data from local storage on component mount
  useEffect(() => {
    const storedProfileData = getLocalStorage('userProfile');
    if (storedProfileData) {
      setProfileData(storedProfileData);
    }
  }, []);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save updated profile data to local storage
    setLocalStorage('userProfile', profileData);
    console.log('Profile updated:', profileData);
  };

  return (
    <form className="max-w-lg mx-auto bg-white p-8 shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Profile Management</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={profileData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={profileData.phone}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={profileData.address}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Update Profile
      </button>
    </form>
  );
};

export default ProfileManagement;
