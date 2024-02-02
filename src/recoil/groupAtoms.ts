import { atom } from 'recoil';

export type GroupInfo = {
	profile: string | undefined;
	name: string;
	type: string;
	link: string;
	text: string;
	contact: string;
}

export const groupInfoAtom = atom<GroupInfo>({
    key: 'groupInfoAtom',
    default: {
		profile: undefined,
        name: '예시',
	    type: '동아리',
	    link: 'ondot.co.kr',
	    text: 'hello',
	    contact: 'email'
    },
});