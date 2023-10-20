"use client";
import * as React from "react";
import { useState } from "react";
import StickyTopMobileSideBar from "./StickyTopMobileSideBar/StickyTopMobileSideBar";
import SidebarDialog from "./SidebarDialog/SidebarDialog";
import { sideBarMenuItems } from "./Navigation";
import { Sidebar } from "./Sidebar/Sidebar";

type AppLayoutProps = {
  children?: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div>
        {/*/!* Mobile menu *!/*/}
        <StickyTopMobileSideBar setOpen={setSidebarOpen} />
        <SidebarDialog
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          sideBarPrimaryItems={sideBarMenuItems}
        />

        {/* Static sidebar for desktop */}
        <Sidebar
          sideBarPrimaryItems={sideBarMenuItems}
          toggleCollapsed={toggleCollapsed}
          collapsed={collapsed}
        />

        {/* main content area */}
        <main
          className={`${
            collapsed === false ? "lg:ml-64" : "lg:ml-20"
          } flex-grow flex flex-col`}
        >
          <div className="pt-10 flex flex-col h-screen">{children}</div>
        </main>
      </div>
    </>
  );
};

export default AppLayout;
