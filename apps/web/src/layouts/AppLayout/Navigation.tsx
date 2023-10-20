import {
  CircleStackIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export interface NavigationItemProps {
  label: string
  icon: any
  route: string
}

export const sideBarMenuItems: NavigationItemProps[] = [
  {label: 'Projects', route: '/projects' , icon: HomeIcon},
  {label: 'Resources', route: '/resources' , icon: CircleStackIcon},
]
