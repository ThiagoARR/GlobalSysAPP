import React from 'react';

interface UserProfileProps {
  userName: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userName }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-700">{userName}</span>
      <img
        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}`}
        alt="User avatar"
        className="w-8 h-8 rounded-full"
      />
    </div>
  );
};

export default UserProfile;