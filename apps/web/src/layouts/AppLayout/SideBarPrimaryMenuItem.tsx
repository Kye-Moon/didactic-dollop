import * as React from "react";
import Link from "next/link";
import { NavigationItemProps } from "./Navigation";

interface SideBarPrimaryMenuItemProps {
  item: NavigationItemProps;
  showText?: boolean;
}

export const SideBarPrimaryMenuItem = ({
  item,
  showText = true,
}: SideBarPrimaryMenuItemProps) => {
  return (
    <li key={item.label}>
      <Link
        className={
          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold "
        }
        href={item.route}
      >
        <item.icon
          className={"h-6 w-6 shrink-0 group-hover:text-accent"}
          aria-hidden="true"
        />
        {showText && item.label}
      </Link>
    </li>
  );
};
