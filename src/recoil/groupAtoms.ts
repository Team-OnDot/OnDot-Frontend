import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

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
	effects_UNSTABLE: [persistAtom],
});
