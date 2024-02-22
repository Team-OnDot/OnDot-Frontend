import { atom } from 'recoil';

export const selectedDatesAtom = atom<string[]>({
	key: 'selectedDatesAtom',
	default: [],
});

export const scheduleAtom = atom<Date[]>({
	key: 'scheduleAtom',
	default: [],
});