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
  //
}
