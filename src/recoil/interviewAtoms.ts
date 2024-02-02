import { atom } from 'recoil';

export type InterviewInfo = {
    //interview-make-1에 대한 정보
    name: string;
    startDate: string;
    endDate: string;
    timeType: string;
    format1: string;
    format2: string;
    place: string;
}

export const interviewAtom = atom<InterviewInfo>({
    key: 'interviewAtom',
    default: {
        name: '',
        startDate: '',
        endDate: '',
        timeType: '',
        format1: '',
        format2: '',
        place: ''
    },
  });