export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
}

export interface NavItemsProps {
  item: ChildItem;
}

import { uniqueId } from "lodash";

const SidebarContent: MenuItem[] = [
  {
    heading: "Bank",
    children: [
      {
        name: "Statement",
        icon: "solar:widget-add-line-duotone",
        id: uniqueId(),
        url: "/",
      },
      {
        name: "History",
        icon: "solar:history-broken",
        id: uniqueId(),
        url: "/history",
      },
      {
        name: "Deposit/WithDraw",
        icon: "solar:card-transfer-linear",
        id: uniqueId(),
        url: "/depowith",
      },
    ],
  },
];

export default SidebarContent;
