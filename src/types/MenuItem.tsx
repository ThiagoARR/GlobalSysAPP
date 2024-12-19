export interface MenuItem {
    NAME: string;
    ICON: string | null;
    SUBITEMS: MenuItem[];
  }
  
  export type MenuItems = MenuItem[];