/* eslint-disable no-unused-vars */
import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useAppContext } from '../../context';

const Layout = (props) => {
  const { collapsed, setSidebarCollapsed, showSidebar, setShowSidebar } =
    useAppContext();
  return (
    <div
      className={classNames({
        'grid bg-transparent min-h-screen': true,
        'grid-cols-sidebar': !collapsed,
        'grid-cols-sidebar-collapsed': collapsed,
        'transition-[grid-template-columns] duration-300 ease-in-out': true
      })}
      style={{ width: '100%' }}
    >
      <div className="flex w-full">
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setSidebarCollapsed}
          shown={showSidebar}
        />
        <div className="block w-full">
          <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
          <div onClick={() => setSidebarCollapsed(true)}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
