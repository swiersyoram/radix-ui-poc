"use client";
import React from "react";
import ColorModeToggle from "@/app/components/ColorModeToggle";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { TabNav } from "@radix-ui/themes";

const Header = () => {
  const path = usePathname();
  return (
    <div className={"py-5 flex justify-between"}>
      <div className={"flex items-center"}>
        <h1 className={"font-bold text-2xl mr-10"}>Some Company</h1>
        <div>
          <TabNav.Root>
            <TabNav.Link asChild active={path === "/"}>
              <NextLink href="/">Home</NextLink>
            </TabNav.Link>
            <TabNav.Link asChild active={path === "/dashboard"}>
              <NextLink href="/dashboard">Dashboard</NextLink>
            </TabNav.Link>
            <TabNav.Link asChild active={path === "/form"}>
              <NextLink href="/form">Form</NextLink>
            </TabNav.Link>
          </TabNav.Root>
        </div>
      </div>

      <ColorModeToggle />
    </div>
  );
};

export default Header;
