import { atom } from 'recoil';

export type InterviewInfo = {
    //interview-make-1에 대한 정보
    interviewName: string;
    startDate: string;
    endDate: string;
    timeType: string;
    format1: string;
    format2: string;
    interviewPlace: string;
}

export const interviewAtom = atom<InterviewInfo>({
    key: 'interviewAtom',
    default: {
        interviewName: '',
        startDate: '',
        endDate: '',
        timeType: '',
        format1: '',
        format2: '',
        interviewPlace: ''
    },
  });