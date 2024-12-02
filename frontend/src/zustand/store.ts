import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  username: string;
  setUsername: (username: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      username: "",
      setUsername: (username: string) => set({ username }),
    }),
    {
      name: "user-storage",
    }
  )
);
