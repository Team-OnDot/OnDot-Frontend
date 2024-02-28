import { atom } from 'recoil';

export type InterviewInfo = {
    //interview-make-1에 대한 정보
    interviewName: string;
    startDate: string;
    endDate: string;
    timeType: number;
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
        timeType: 0,
        format1: '',
        format2: '',
        interviewPlace: ''
    },
  });

//지원 기간 시작
export const recruitStartDateAtom = atom<string>({
  key: 'recruitStartDateAtom',
  default: '',
});

//지원 기간 끝
export const recruitEndDateAtom = atom<string>({
  key: 'recruitEndDateAtom',
  default: '',
});


//면접 시간
export const interviewTimeAtom = atom<number>({
    key: 'interviewTimeAtom',
    default: 5,
  });
