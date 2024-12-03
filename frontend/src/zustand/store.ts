import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  username: string;
  setUsername: (username: string) => void;
}

type Client = {
  socketId: string;
  username: string;
};
interface ClientsState {
  clients: Client[];
  setClients: (client: Client[]) => void;
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

export const useClientStore = create<ClientsState>()((set) => ({
  clients: [],
  setClients: (clients: Client[]) => set({ clients }),
}));
