import { atom } from 'recoil';

//그룹 분류
export const groupTypeAtom = atom<string>({
    key: 'groupTypeAtom',
    default: '동아리',
  });
