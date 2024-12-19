import React from 'react';
import { Bell } from 'lucide-react';

const NotificationBell: React.FC = () => {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-full relative">
      <Bell size={20} />
      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
    </button>
  );
};

export default NotificationBell;