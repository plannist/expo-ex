import { create } from 'zustand';

type User = {
  id: string;
  name: string;
  age: string;
  sex: string;
  profileUrl: string;
};

interface UserStore {
  user: User;
  setUser: (user: User) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: { id: null, name: null, age: null, sex: null, profileUrl: null },
  setUser: (user: User) => set({ user: user }),
}));

export default useUserStore;
