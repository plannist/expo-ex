/**
 * @copyright Copyright 2025. SJSoftTech. All rights reserved.
 * @file api/client.ts
 * @description zustand 를 활용한 로딩 store 관리
 * @author RN framework
 * @since 2025.01.20
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2025.01.20           park jong-suk        		신규 생성
 */

import { create } from 'zustand';

interface Loading {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const useLoadingStore = create<Loading>((set) => ({
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading })
}));

export default useLoadingStore;
