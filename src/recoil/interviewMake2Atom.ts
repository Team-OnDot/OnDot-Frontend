import { atom } from 'recoil';

export const selectedDatesAtom = atom<string[]>({
	key: 'selectedDatesAtom',
	default: [],
});

export const scheduleAtom = atom<Date[]>({
	key: 'scheduleAtom',
	default: [new Date('2024-02-13T10:00:00'), new Date('2024-02-13T12:00:00')],
});
