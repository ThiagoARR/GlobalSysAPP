import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '../../types/MenuItem';
import { Icon } from '../../utils/iconMap';

interface SidebarItemProps {
  item: MenuItem;
  depth?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = item.SUBITEMS.length > 0;
  const icon = <Icon name={item.ICON} />; // Passa item.ICON que pode ser string ou null
  
  const paddingLeft = `${depth * 1}rem`;

  return (
    <div>
      <div
        className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 ${hasSubItems ? 'justify-between' : ''}`}
        onClick={() => hasSubItems && setIsOpen(!isOpen)}
        style={{ paddingLeft: `calc(1rem + ${paddingLeft})` }}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-gray-600">{icon}</span>}
          <span className="text-gray-700">{item.NAME}</span>
        </div>
        {hasSubItems && (
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          />
        )}
      </div>

      {hasSubItems && isOpen && (
        <div className="border-l border-gray-200 ml-4">
          {item.SUBITEMS.map((subItem, index) => (
            <SidebarItem
              key={`${subItem.NAME}-${index}`}
              item={subItem}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
