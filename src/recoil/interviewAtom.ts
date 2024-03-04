import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export type TimeCells = {
	dateTime: string;
	applicants: [
		{
			name: string;
			phone: string;
		},
	];
};

export type InterviewInfo = {
	name: string;
	description: string;
	applyStartDate: string;
	applyEndDate: string;
	requiredTime: number;
	interviewerCount: number;
	applicantCount: number;
	location: string;
	interviewStartDate: string;
	interviewEndDate: string;
	interviewDates: string[];
	timeCells: TimeCells[];
};

export const interviewInfoAtom = atom<InterviewInfo>({
	key: 'interviewInfoAtom',
	default: {
		name: '',
		description: '',
		applyStartDate: '',
		applyEndDate: '',
		requiredTime: 0,
		interviewerCount: 0,
		applicantCount: 0,
		location: '',
		interviewStartDate: '',
		interviewEndDate: '',
		interviewDates: [],
		timeCells: [],
	},
	effects_UNSTABLE: [persistAtom],
});
