import { atom } from 'recoil';

//면접 삭제 모달창
export const interviewDelAtom = atom<boolean>({
    key: 'interviewDelAtom',
    default: false,
  });

//삭제할 면접 id
export const deleteIdAtom = atom<number>({
    key: 'deleteIdAtom',
    default: 0,
});

//삭제할 면접 이름
export const deleteNameAtom = atom<string>({
    key: 'deleteNameAtom',
    default: '',
});