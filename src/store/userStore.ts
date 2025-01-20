/**
 * @copyright Copyright 2025. SJSoftTech. All rights reserved.
 * @file api/client.ts
 * @description zustand 를 활용한 사용자정보 store 관리
 * @author RN framework
 * @since 2025.01.20
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2025.01.20           park jong-suk        		신규 생성
 */

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
  setUser: (user: User) => set({ user: user })
}));

export default useUserStore;
