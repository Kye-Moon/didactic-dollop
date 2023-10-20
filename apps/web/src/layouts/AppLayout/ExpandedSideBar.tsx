import * as React from "react";
import { SideBarPrimaryMenuItem } from "./SideBarPrimaryMenuItem";
import { SidebarProps } from "Sidebar/Sidebar";
import { Separator } from "../../components/primatives/Seperator";

export const ExpandedSidebar = ({ sideBarPrimaryItems }: SidebarProps) => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
      <div className="flex space-x-4 pt-4">
        <img
          className="h-8 w-8 mt-1"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </div>

      <Separator />

      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {sideBarPrimaryItems.map((item) => (
                <SideBarPrimaryMenuItem key={item.label} item={item} />
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};
