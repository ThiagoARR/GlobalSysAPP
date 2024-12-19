import React from 'react';
import { MenuItems } from '../../types/MenuItem';
import SidebarItem from './SidebarItem';

interface SidebarContentProps {
  items: MenuItems;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ items }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {items.map((item, index) => (
        <SidebarItem key={`${item.NAME}-${index}`} item={item} />
      ))}
    </div>
  );
};

export default SidebarContent;