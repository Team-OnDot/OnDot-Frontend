import ScheduleSelector from 'react-schedule-selector';
import { SelectionSchemeType } from 'react-schedule-selector/src/lib/selection-schemes';
import React from 'react';
import * as S from './TimeTable.style';
import format from 'date-fns/format';
import { useRecoilState } from 'recoil';
import { scheduleAtom } from '../../recoil/interviewMake2Atom';

type TimeTable = {
	selectedDates: string[];
	availableTimes?: Date[];
};

const TimeTable = ({ selectedDates, availableTimes }: TimeTable) => {
	const [schedule, setSchedule] = useRecoilState(scheduleAtom);
	const [hourlyChunks, setHourlyChunks] = React.useState<number>(2);

	const renderingDates = selectedDates.map((date) => new Date(date));
	// const blockedTimes = [new Date('2024-02-06T10:00:00'), new Date('2024-02-06T13:00:00')];

	const renderCustomDateCell = (date: Date, selected: boolean, blocked: boolean) => {
		return <S.DateCell selected={selected} blocked={blocked}></S.DateCell>;
	};

	const renderCustomTimeLabel = (time: Date) => {
		const formatted = format(time, 'H:mm');
		return <S.TimeLabel>{formatted}</S.TimeLabel>;
	};

	const renderCustomDateLabel = (date: Date) => {
		const month = format(date, 'M');
		const day = format(date, 'd');
		const dayOfWeek = format(date, 'e');

		let dayOfWeekKR;

		switch (dayOfWeek) {
			case '1':
				dayOfWeekKR = '일';
				break;

			case '2':
				dayOfWeekKR = '월';
				break;

			case '3':
				dayOfWeekKR = '화';
				break;

			case '4':
				dayOfWeekKR = '수';
				break;

			case '5':
				dayOfWeekKR = '목';
				break;

			case '6':
				dayOfWeekKR = '금';
				break;

			case '7':
				dayOfWeekKR = '토';
				break;
		}
		return <S.DateLabel>{`${month}월 ${day}일 ${dayOfWeekKR}요일`}</S.DateLabel>;
	};

	return (
		<S.Wrapper>
			<ScheduleSelector
				minTime={8}
				maxTime={22}
				renderingDates={renderingDates}
				selection={schedule}
				onChange={setSchedule}
				hourlyChunks={hourlyChunks}
				timeFormat="H:mm"
				selectionScheme={'square'}
				rowGap="0px"
				columnGap="13px"
				renderDateLabel={renderCustomDateLabel}
				renderTimeLabel={renderCustomTimeLabel}
				renderDateCell={renderCustomDateCell}
				availableTimes={availableTimes}
			/>
		</S.Wrapper>
	);
};

export default TimeTable;
