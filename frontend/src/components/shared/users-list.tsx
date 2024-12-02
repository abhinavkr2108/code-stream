import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export default function UsersList() {
  const users = [
    { socketID: "1", username: "Abhinav" },
    { socketID: "2", username: "user2" },
    { socketID: "3", username: "user3" },
    { socketID: "4", username: "user4" },
  ];
  return (
    <div className="grid grid-cols-2">
      {users.map((user) => (
        <div className="flex flex-col items-center gap-2 p-2">
          <Avatar>
            <AvatarImage src={user.username[0].toUpperCase()} />
            <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <p className="text-sm text-primary-foreground font-bold">
            {user.username}
          </p>
        </div>
      ))}
    </div>
  );
}
