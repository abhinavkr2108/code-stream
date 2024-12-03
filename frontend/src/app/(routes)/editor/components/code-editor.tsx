"use client";
import React, { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { initSocket } from "../../../../../socket";
import { Socket } from "socket.io-client";
import { useClientStore, useUserStore } from "@/zustand/store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface CodeEditorProps {
  roomId: string;
}
export default function CodeEditor({ roomId }: CodeEditorProps) {
  const [value, setValue] = useState<string>("");
  const socketRef = React.useRef<Socket | null>(null);

  const userData = useUserStore();
  const { clients, setClients } = useClientStore();
  const router = useRouter();

  const handleErrors = (error: any) => {
    toast.error("Failed establishing connection");
    console.error(error);
    router.push("/");
  };

  useEffect(() => {
    console.log("use effect render");
    const init = async () => {
      socketRef.current = await initSocket();
      const socket = socketRef.current;

      socket.on("connect_error", (error) => {
        handleErrors(error);
      });
      socket.on("connect_failed", (error) => {
        handleErrors(error);
      });

      socket.emit("join", {
        roomId: roomId,
        username: userData.username,
      });

      console.log("joined room", roomId);

      socket.on("joined", (data) => {
        if (!userData.username) {
          router.push("/");
        }
        const { clients, username, socketId } = data;
        console.log("joined", data);
        if (userData.username !== username) {
          toast.success(`User ${username} joined the room`);
        }
        setClients(clients);
      });
    };
    init();
    return () => {
      socketRef.current?.disconnect(); // Clean up socket on unmount
    };
  }, []);

  useEffect(() => {
    console.log("CLIENT STATE");
    console.log(clients);
  }, [clients]);

  return (
    <div>
      <Editor
        theme="vs-dark"
        height={"100vh"}
        width={"100%"}
        value={value}
        onChange={(value) => setValue(value ?? "")}
      />
    </div>
  );
}
