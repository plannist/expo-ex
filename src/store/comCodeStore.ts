import { create } from 'zustand';

type ComCode = {
  comCdVal: string;
  comCdValNm: string;
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
