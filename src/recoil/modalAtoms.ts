import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

//면접 삭제 모달창
export const interviewDelAtom = atom<boolean>({
	key: 'interviewDelAtom',
	default: false,
	effects_UNSTABLE: [persistAtom],
});

//삭제할 면접 id
export const deleteIdAtom = atom<number>({
	key: 'deleteIdAtom',
	default: 0,
	effects_UNSTABLE: [persistAtom],
});

//삭제할 면접 이름
export const deleteNameAtom = atom<string>({
	key: 'deleteNameAtom',
	default: '',
	effects_UNSTABLE: [persistAtom],
});
