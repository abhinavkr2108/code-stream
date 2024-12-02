"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { v4 } from "uuid";
import { toast } from "sonner";

const formSchema = z.object({
  roomId: z.string().min(1, {
    message: "Room ID is required",
  }),
  username: z.string().min(1, {
    message: "Username is required",
  }),
});

export default function FormContent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roomId: "",
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("username", values.username);
    console.log("roomId", values.roomId);
  };

  const createNewRoom = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const id = v4();
      form.setValue("roomId", id);
      toast.success("Room created successfully");
    } catch (error) {
      toast.error("Error creating room");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="roomId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>RoomId</FormLabel>
              <FormControl>
                <Input placeholder="RoomId" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-2">
          <Button variant={"secondary"} onClick={createNewRoom}>
            Create New Room
          </Button>
          <Button type="submit">Join Existing Room</Button>
        </div>
      </form>
    </Form>
  );
}
