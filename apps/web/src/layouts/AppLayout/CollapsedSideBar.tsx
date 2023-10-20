import * as React from "react";
import { SidebarProps } from "Sidebar/Sidebar";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { SideBarPrimaryMenuItem } from "./SideBarPrimaryMenuItem";
import { Separator } from "../../components/primatives/Seperator";

/**
 * Collapsed sidebar component
 * Renders the sidebar when it is collapsed
 * @param sideBarPrimaryItems
 * @constructor
 */
export const CollapsedSideBar = ({ sideBarPrimaryItems }: SidebarProps) => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto  bg-white px-6 pb-2 ring-1 ring-white/10 ">
      <div className="flex flex-col pt-4  items-center">
        <img
          className="h-6 w-6"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </div>
      <Separator />
      {/*<Avatar className={"flex items-center"}>*/}
      {/*  <AvatarFallback>{"A"}</AvatarFallback>*/}
      {/*</Avatar>*/}
      <Separator />
      <nav className="flex flex-1 flex-col ">
        <ul role="list" className="-mx-2 flex-1 space-y-1">
          {sideBarPrimaryItems.map((item) => (
            <TooltipProvider key={item.label}>
              <Tooltip>
                <TooltipTrigger>
                  <SideBarPrimaryMenuItem showText={false} item={item} />
                </TooltipTrigger>
                <TooltipContent side={"right"}>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </ul>
      </nav>
    </div>
  );
};
