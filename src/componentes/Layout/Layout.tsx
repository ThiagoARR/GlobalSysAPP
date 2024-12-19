import { useState } from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
          userName="Tom Cook"
        />
        
        {/* Main content where children will be rendered */}
        <main className="flex-1 overflow-y-auto p-6">
          {children} {/* Aqui o conteúdo das páginas será renderizado */}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
