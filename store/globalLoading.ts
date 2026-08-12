import { create } from "zustand";

export type GlobalLoadingStoreType = {
  isLoading: boolean;
  setLoadingFalse: () => void;
  setLoadingTrue: () => void;
};

const useGlobalLoading = create<GlobalLoadingStoreType>((set) => ({
  isLoading: true,
  setLoadingTrue: () => set(() => ({ isLoading: true })),
  setLoadingFalse: () => set(() => ({ isLoading: false })),
}));

export default useGlobalLoading;
