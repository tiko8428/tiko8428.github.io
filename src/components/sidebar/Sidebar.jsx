import { useState } from "react";
import { AiOutlineHome } from 'react-icons/ai';

import "./sidebar.css";

const menuItems = [
  {
    name: "name",
    icon: <AiOutlineHome/>,
    key: "1"
  },
  {
    name: "name2",
    icon: <AiOutlineHome/>,
    key: "2"
  },
  {
    name: "name3",
    icon: <AiOutlineHome/>,
    key: "3"
  },
  {
    name: "name4",
    icon: <AiOutlineHome/>,
    key: "4"
  },
  {
    name: "name5",
    icon: <AiOutlineHome/>,
    key: "5"
  },
  {
    name: "name6",
    icon: <AiOutlineHome/>,
    key: "6"
  }
];


export const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("3");
  return <nav className="sidebar_container">
    <ul>
      {menuItems.map((item) => {
        const itemClass = item.key === activeMenu ? "sidebar_menu_item sidebar_menu_item__active": "sidebar_menu_item"
        return <li key={item.key} className={itemClass}>

          <button onClick={()=>{ setActiveMenu(item.key)}}>
          {item.icon} {item.name}
          </button>
        </li>
      })}
    </ul>
  </nav>
}