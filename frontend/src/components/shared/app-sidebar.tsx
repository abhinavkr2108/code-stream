import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "../ui/sidebar";
import Image from "next/image";
import UsersList from "./users-list";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function AppSidebar() {
  return (
    <Sidebar className="bg-[#1c1e29]">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <div className="flex flex-col gap-0.5">
            <h1 className="text-2xl font-bold text-primary-foreground">
              Code-Stream
            </h1>
            <p className="text-primary text-sm">Online Code Editor</p>
          </div>
        </div>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <h2 className="text-xl font-bold mt-2 text-primary-foreground">
            Connected Users
          </h2>
          <UsersList />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button className="w-full">Copy Room Id</Button>
        <Button className="w-full" variant={"destructive"}>
          Leave Room
        </Button>
        <p className="text-muted-foreground text-sm text-center">
          © 2024 Code-Stream
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
