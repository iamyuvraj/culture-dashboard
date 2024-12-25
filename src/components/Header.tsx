import React from 'react';

const Header: React.FC = () => (
  <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow">
    <h1 className="text-lg font-bold">Ministry of Culture Dashboard</h1>
    <div className="flex items-center space-x-4">
      <span>Admin</span>
      <span>{new Date().toLocaleDateString()}</span>
    </div>
  </header>
);

export default Header;
