import { TimeCells } from './interviewAtom';
import { recoilPersist } from 'recoil-persist';

import { atom } from 'recoil';
const { persistAtom } = recoilPersist();

export type NotMatchedApplicants = {
	name: string;
	phone: string;
};

export type InterviewFinal = {
	timeCells: TimeCells[];
	notMatchedApplicants: NotMatchedApplicants[];
};

export const interviewFinalAtom = atom<InterviewFinal>({
	key: 'interviewFinalAtom',
	default: {
		timeCells: [],
		notMatchedApplicants: [],
	},
	effects_UNSTABLE: [persistAtom],
});
