import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export type UserInfosStoreType = {
  username: string | number | null;
  password: string | number | null;
  isLoggedIn: boolean;
  setUserInfos: (username: string, password: string) => void;
}

const userInfosStore = create<UserInfosStoreType>()(
  persist((
    ((set) => ({
      isLoggedIn: false,
      username: '',
      password: '',
      setUserInfos: (_username, _password) => set(() => ({
        isLoggedIn: true,
        username: _username,
        password: _password
      }))
    }))
  ), {
    name: 'user_infos',
    storage: createJSONStorage(() => localStorage),
  }))

export default userInfosStore;
