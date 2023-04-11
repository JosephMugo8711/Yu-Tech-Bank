import React from "react";
import Avatar from "./Avatar";
import Switch from "./Switch";

const ProfilePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">General Settings</h1>

      <div className="bg-white rounded-lg shadow mb-8">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
          <p className="text-gray-600 mb-2">Update your personal information</p>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
              <label htmlFor="firstName" className="block font-medium mb-2">First Name</label>
              <input type="text" id="firstName" className="form-input w-full" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label htmlFor="lastName" className="block font-medium mb-2">Last Name</label>
              <input type="text" id="lastName" className="form-input w-full" />
            </div>
          </div>
        </div>
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Avatar</h2>
          <p className="text-gray-600 mb-2">Update your profile picture</p>
          <Avatar size="lg" />
        </div>
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Email Notifications</h2>
          <p className="text-gray-600 mb-2">Control your email notifications</p>
          <div className="flex items-center">
            <Switch />
            <span className="ml-2">Receive newsletter and promotions</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Password</h2>
          <p className="text-gray-600 mb-2">Change your password</p>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
              <label htmlFor="currentPassword" className="block font-medium mb-2">Current Password</label>
              <input type="password" id="currentPassword" className="form-input w-full" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label htmlFor="newPassword" className="block font-medium mb-2">New Password</label>
              <input type="password" id="newPassword" className="form-input w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
