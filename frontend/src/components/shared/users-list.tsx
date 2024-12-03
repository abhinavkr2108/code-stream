"use client";
import React, { useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { useClientStore } from "@/zustand/store";

export default function UsersList() {
  const { clients } = useClientStore();
  useEffect(() => {
    console.log(clients);
  }, [clients]);

  return (
    <div className="grid grid-cols-2">
      {clients &&
        clients.map(
          (client, idx: number) =>
            client.username !== "" && (
              <div className="flex flex-col items-center gap-2 p-2" key={idx}>
                <Avatar>
                  <AvatarImage src={client?.username[0].toUpperCase() || "#"} />
                  <AvatarFallback>
                    {client?.username[0].toUpperCase() || "#"}
                  </AvatarFallback>
                </Avatar>
                <p className="text-sm text-primary-foreground font-bold">
                  {client?.username}
                </p>
              </div>
            )
        )}
    </div>
  );
}
