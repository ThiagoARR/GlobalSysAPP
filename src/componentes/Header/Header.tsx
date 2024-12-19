import React from 'react';
import { Menu } from 'lucide-react';
import SearchBar from './SearchBar';
import NotificationBell from './NotificationBell';
import UserProfile from './UserProfile';

interface HeaderProps {
  onMenuClick: () => void;
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, userName }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
      >
        <Menu size={24} />
      </button>

      <SearchBar />

      <div className="flex items-center gap-4">
        <NotificationBell />
        <UserProfile userName={userName} />
      </div>
    </header>
  );
};

export default Header;