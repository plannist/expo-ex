import {create} from 'zustand';

interface Loading {
    isLoading: boolean,
    setLoading: (loading: boolean)=>void
}

const useLoading = create<Loading>((set) => ({
    isLoading: false,
    setLoading: (loading) => set({ isLoading: loading }),

}));

export default useLoading;
