/**
 * @copyright Copyright 2025. SJSoftTech. All rights reserved.
 * @file api/client.ts
 * @description zustand 를 활용한 공통코드 store 관리
 * @author RN framework
 * @since 2025.01.20
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2025.01.20           park jong-suk        		신규 생성
 */

import { create } from 'zustand';

type ComCode = {
  comCd: string;
  comCdNm: string;
  grpCd: string;
  grpCdNm: string;
};

interface ComCodeStore {
  comCode: ComCode[];
  setComCode: (comCode: ComCode[]) => void;
}

const useComCodeStore = create<ComCodeStore>((set) => ({
  comCode: [],
  setComCode: (comCode: ComCode[]) => set({ comCode })
}));

export default useComCodeStore;

export function searchComCode(param: ComCode) {
  //TODO 조회
}
