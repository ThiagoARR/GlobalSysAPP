import React, { useEffect, useState } from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarContent from './SidebarContent';
import { MenuItem } from '../../types/MenuItem';
import axios from 'axios';

const Sidebar: React.FC = () => {
  const [navItems, setNavItems] = useState<MenuItem[]>([]); // Ajuste o tipo para MenuItem[]

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const response = await axios.get('https://localhost:7288/itemMenu', {
          headers: {
            accept: '*/*',
            'X-API-KEY': 'f8f8133b-4c59-4ae2-9c1b-8e1b73aa8664',
          },
        });

        const processedItems: MenuItem[] = response.data.map((item: MenuItem) => ({
          ...item,
          ICON: item.ICON || null, // Certifique-se de que o ícone seja processado como string ou null
        }));

        setNavItems(processedItems);
      } catch (error: any) {
        console.error('Error fetching item menu:', error.response?.data || error.message);
      }
    };

    fetchNavItems();
  }, []);

  return (
    <div className="w-60 h-screen bg-white border-r border-gray-200 flex flex-col text-sm">
      <SidebarHeader />
      <SidebarContent items={navItems} />
    </div>
  );
};

export default Sidebar;
