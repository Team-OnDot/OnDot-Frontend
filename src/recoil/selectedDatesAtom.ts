import { atom } from 'recoil';

export const selectedDatesAtom = atom<string[]>({
	key: 'selectedDatesAtom',
	default: [],
});
