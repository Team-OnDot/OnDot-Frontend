import { atom } from 'recoil';

export type GroupInfo = {
	organizationId: number | null;
	name: string;
	type: string;
	profileUrl: string;
	imageUrl: string;
	contact: string;
	description: string;
	interviews: number[];
};

export const groupInfoAtom = atom<GroupInfo>({
	key: 'groupInfoAtom',
	default: {
		organizationId: null,
		name: '',
		type: '',
		profileUrl: '',
		imageUrl: '',
		contact: '',
		description: '',
		interviews: [],
	},
});
