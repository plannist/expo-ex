import { createContext, type ReactNode, useContext } from 'react';
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';

interface User {
  id: string;
  name: string;
  age: string;
  sex: string;
  profileUrl: string;
}

// MMKV 인스턴스 생성
const storage = new MMKVLoader().initialize();

const UserContext = createContext<{
  user: User | null;
  setUser: (userData: User | null) => void;
  removeUser: () => void;
}>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useMMKVStorage<User>('user', storage, {
    id: null,
    name: null,
    age: null,
    sex: null,
    profileUrl: null,
  });

  const removeUser = () => {
    storage.removeItem('user');
    setUser({
      id: null,
      name: null,
      age: null,
      sex: null,
      profileUrl: null,
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
