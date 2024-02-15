import { atom } from 'recoil';

//그룹 분류
export const loginAtom = atom<boolean>({
    key: 'loginAtom',
    default: false,
  });