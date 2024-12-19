import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import SideBar from "../components/fragments/Sidebar";
import Dashboard from '../pages/Dashboard';

const ContentLayout = () => {
  return (
    <main className="flex flex-row flex-1 overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      {/* Content dinamis */}
      <section className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </section>
    </main>
  );
};

export default ContentLayout;
