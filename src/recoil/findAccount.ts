import { atom } from 'recoil';

//비밀번호 찾기 이메일
export const findEmailAtom = atom<string>({
    key: 'findEmailAtom',
    default: '',
  });

//해시값
export const hashValueAtom = atom<string>({
    key: 'hashValueAtom',
    default:'',
});

//인증번호
export const emailCodeAtom = atom<string>({
    key: 'emailCodeAtom',
    default:'',
});
