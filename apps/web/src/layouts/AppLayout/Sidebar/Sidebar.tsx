import * as React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { ExpandedSidebar } from "../ExpandedSideBar";
import { CollapsedSideBar } from "../CollapsedSideBar";
import { NavigationItemProps } from "../Navigation";
import { Button } from "@/components/primatives/Button/Button";

export interface SidebarProps {
  sideBarPrimaryItems?: NavigationItemProps[];
  collapsed?: boolean;
  toggleCollapsed?: () => void;
}

export const Sidebar = ({
  sideBarPrimaryItems,
  collapsed,
  toggleCollapsed,
}: SidebarProps) => {
  return (
    <div
      className={`hidden bg-white lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col ${
        collapsed === false ? "w-64" : "w-20"
      } `}
    >
      {collapsed === false ? (
        <ExpandedSidebar sideBarPrimaryItems={sideBarPrimaryItems} />
      ) : (
        <CollapsedSideBar sideBarPrimaryItems={sideBarPrimaryItems} />
      )}
      <div className={" flex justify-end    w-full"}>
        <div className={" "}>
          <Button
            size={"sm"}
            variant={"link"}
            onClick={() => toggleCollapsed()}
            className=" font-semibold  px-4 my-4"
          >
            {collapsed === false ? (
              <ArrowLeftIcon className="h-5 w-5 " aria-hidden="true" />
            ) : (
              <ArrowRightIcon className="h-5 w-5 " aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
