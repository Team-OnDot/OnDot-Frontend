import { TimeCells } from './interviewAtom';
import { atom } from 'recoil';

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
});
