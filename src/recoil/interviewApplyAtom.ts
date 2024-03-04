import { atom } from 'recoil';

export type InterviewApply = {
	// /interview-apply
    organizationId: string;
    interviewId: string;
	// /interview-apply-input-info
	applyName: string;
    applyPhone: String;
	applyEmail: string;
};

export const interviewApplyAtom = atom<InterviewApply>({
	key: 'interviewApplyAtom',
	default: {
		organizationId: '',
		interviewId: '',
		applyName: '',
		applyPhone: '',
		applyEmail: '',
	},
});