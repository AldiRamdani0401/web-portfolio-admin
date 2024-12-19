import React, { useState } from 'react';
import { HiViewGrid } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const SideBar = () => {

  const [isOpen, setOpen] = useState(true);

  const menuItems = [
    { name: 'Dashboard', icon: <HiViewGrid size={30}/> , path: '/dashboard' },
    { name: 'User Management', icon: <HiViewGrid size={30}/>, path: '/user-management' },
    { name: 'Project Management', icon: <HiViewGrid size={30}/>, path: '/project-management' },
    { name: 'Expertise Management', icon: <HiViewGrid size={30}/>, path: '/expertise-management' },
    { name: 'Experience Management', icon: <HiViewGrid size={30}/>, path: '/experience-management' },
    { name: 'Settings', icon: <HiViewGrid size={30}/>, path: '/settings' },
  ];

  return (
    <aside className={`${isOpen ? 'w-64' : 'w-fit'} bg-slate-200 border-r shadow-md relative`}>
      <button className={`absolute px-2 py-10 ${isOpen ? 'top-16 right-[-17px] bg-red-600' : 'top-16 right-[-17px] bg-green-700'} rounded-r-lg`}
      onClick={() => setOpen(prev => !prev)}></button>
      <ul className="py-4">
        {menuItems.map((item, index) => (
          <li key={index} className="py-2" onClick={() => setOpen(true)}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block py-2  px-3 text-md font-semibold ${
                  isActive ? 'bg-slate-600 text-white font-bold' : 'text-slate-700 hover:bg-slate-400 hover:text-white'
                }`
              }
            >
              <div className="flex flex-row items-center gap-2">
                {item.icon}
                {isOpen && item.name}
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
