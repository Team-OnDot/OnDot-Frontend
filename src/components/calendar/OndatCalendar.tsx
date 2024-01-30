import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import { format } from 'date-fns';
import { useRecoilState } from 'recoil';
import { selectedDatesAtom } from '../../recoil/interviewMake2Atom';

const OndatCalendar = () => {
	const [selectedDates, setSelectedDates] = useRecoilState(selectedDatesAtom);

	const onClickDay = (value: any, e: React.MouseEvent<HTMLButtonElement>) => {
		const date = format(value, 'yyyy-MM-dd');
		if (selectedDates.find((item) => item === date)) {
			const filtered = selectedDates.filter((item) => item !== date);
			setSelectedDates(filtered);
			return;
		}
		setSelectedDates([...selectedDates, date]);
	};

	return (
		<>
			<Calendar
				formatDay={(locale: string | undefined, date: Date) => date.toLocaleString('en', { day: 'numeric' })}
				next2Label={null}
				prev2Label={null}
				showNeighboringMonth={false}
				defaultView="month"
				minDetail="month"
				maxDetail="month"
				// minDate={today}
				locale="ko"
				onClickDay={onClickDay}
				tileClassName={({ date }) => {
					if (selectedDates!.find((item) => item === format(date, 'yyyy-MM-dd'))) {
						return 'react-calendar__tile--active';
					} else {
						return 'react-calendar__tile--inactive';
					}
				}}
			/>
		</>
	);
};

export default OndatCalendar;
