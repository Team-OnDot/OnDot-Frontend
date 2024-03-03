import { useRecoilValue } from 'recoil';
import * as S from './FinalTable.style';
import { interviewInfoAtom } from '../../recoil/interviewAtom';
import { useEffect, useState } from 'react';
import format from 'date-fns/format';
import ko from 'date-fns/locale/ko';
import { interviewFinalAtom } from '../../recoil/interviewFinalAtom';

function FinalTable() {
	const interviewDates = useRecoilValue(interviewInfoAtom).interviewDates;
	const [formattedDates, setFormattedDates] = useState<string[]>([]);
	const timeCells = useRecoilValue(interviewFinalAtom).timeCells;

	useEffect(() => {
		if (interviewDates) {
			const temp = interviewDates.map((date) => format(new Date(date), 'M월 d일 EEEE', { locale: ko }));
			setFormattedDates(temp);
		}
	}, [interviewDates]);
	return (
		<>
			{interviewDates.map((date) => (
				<S.Container key={date}>
					<colgroup>
						<col width="20%" />
						<col width="80%" />
					</colgroup>
					<tbody>
						<tr>
							<S.Header colSpan={2}>{format(new Date(date), 'M월 d일 EEEE', { locale: ko })}</S.Header>
						</tr>
						<tr>
							<S.TdLeft>시간</S.TdLeft>
							<S.TdRight>이름(전화번호 뒷자리)</S.TdRight>
						</tr>
						{timeCells.map((cell) => {
							if (format(new Date(date), 'yyyy-M-d') === format(new Date(cell.dateTime), 'yyyy-M-d')) {
								return (
									<tr>
										<S.TdLeft>{format(cell.dateTime, 'k:mm')}</S.TdLeft>
										{cell.applicants.map((a) => (
											<S.TdRight>{`${a.name}(${a.phone.slice(9)})`}</S.TdRight>
										))}
									</tr>
								);
							}
						})}
					</tbody>
				</S.Container>
			))}
		</>
	);
}

export default FinalTable;
