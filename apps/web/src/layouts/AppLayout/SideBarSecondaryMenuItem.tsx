import { classNames } from "ui/src/utils";
import * as React from "react";

export const SideBarSecondaryMenuItem = ({ item }) => {
  return (
    <li key={item.name}>
      <a
        href={item.href}
        className={classNames(
          item.current
            ? "bg-gray-50 text-indigo-600"
            : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
        )}
      >
        <span
          className={classNames(
            item.current
              ? "text-indigo-600 border-indigo-600"
              : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600",
            "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white",
          )}
        >
          {item.initial}
        </span>
        <span className="truncate">{item.name}</span>
      </a>
    </li>
  );
};
