import { atom } from 'recoil';

//그룹 분류
export const GroupTypeAtom = atom<string>({
    key: 'GroupTypeAtom',
    default: '동아리',
  });