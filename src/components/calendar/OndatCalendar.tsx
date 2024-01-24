import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

const OndatCalendar = () => {
	const [selected, setSelected] = useState<string[]>([]);
	// const today = new Date();

	const onClickDay = (value: any, e: React.MouseEvent<HTMLButtonElement>) => {
		const date = format(value, 'yyyy-MM-dd');
		if (selected.find((item) => item === date)) {
			const filtered = selected.filter((item) => item !== date);
			setSelected(filtered);
			return;
		}
		setSelected([...selected, date]);
	};

	useEffect(() => {
		console.log(selected);
	}, [selected]);

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
					if (selected!.find((item) => item === format(date, 'yyyy-MM-dd'))) {
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
