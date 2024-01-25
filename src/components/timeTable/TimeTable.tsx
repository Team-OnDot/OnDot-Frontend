import ScheduleSelector from 'react-schedule-selector/src/lib/ScheduleSelector'
import { SelectionSchemeType } from 'react-schedule-selector/src/lib/selection-schemes'
import styled from 'styled-components'
import React from 'react'

const TimeTable = () => {
	const [schedule, setSchedule] = React.useState<Array<Date>>([]);
	const [selectionScheme, setSelectionScheme] = React.useState<SelectionSchemeType>('linear');
	const [startDate, setStartDate] = React.useState<Date>(new Date());
	const [numDays, setNumDays] = React.useState<number>(7);
	const [hourlyChunks, setHourlyChunks] = React.useState<number>(2);
	const [minTime, setMinTime] = React.useState<number>(12);
	const [maxTime, setMaxTime] = React.useState<number>(17);
	const renderingDates = [new Date('2024-01-25'), new Date('2024-01-27')];
	return (
		<ScheduleSelector
			minTime={minTime}
			maxTime={maxTime}
			numDays={numDays}
			// startDate={new Date(startDate)}
			renderingDates={renderingDates}
			selection={schedule}
			onChange={setSchedule}
			hourlyChunks={hourlyChunks}
			timeFormat="h:mma"
			selectionScheme={selectionScheme}
		/>
	);
};

export default TimeTable;