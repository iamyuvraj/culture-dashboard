import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const links = [
    { path: '/', name: 'Dashboard Overview' },
    { path: '/event-performance', name: 'Event Performance' },
    { path: '/financial-performance', name: 'Financial Performance' },
    { path: '/department-performance', name: 'Department Performance' },
    { path: '/timeline-progress', name: 'Timeline & Progress' },
    { path: '/audience-demographics', name: 'Audience Demographics' },
  ];

  return (
    <nav className="w-64 bg-gray-800 text-white flex flex-col h-full">
      <div className="p-4 font-bold text-xl">Ministry Dashboard</div>
      <ul className="flex-1 space-y-2 px-4">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `block p-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
