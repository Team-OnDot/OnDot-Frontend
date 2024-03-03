import * as T from './TimeTableConfirm.style';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import { jsPDF } from 'jspdf';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FinalTable from '../../../components/finalTable/FinalTable';
import { useRecoilState } from 'recoil';
import { interviewFinalAtom } from '../../../recoil/interviewFinalAtom';
import ShareModal from '../../../components/modal/share/ShareModal';

function TimeTableConfirm() {
	const { interviewId } = useParams();
	//공유하기 버튼
	const popUpRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [interviewFinal, setInterviewFinal] = useRecoilState(interviewFinalAtom);

	const onClickShareBtn = () => {
		//alert열기
		setIsOpen(true);
		//alert로 이동
		// popUpRef.current?.scrollIntoView({ behavior: 'smooth' });

		//클립보드 복사
		const currentUrl = window.location.href;
		navigator.clipboard.writeText(currentUrl);
	};

	const divRef = useRef<HTMLDivElement>(null);

	//pdf 다운로드 버튼
	const [pdfClicked, setPdfClicked] = useState(false);
	const onClickPdfBtn = () => {
		const div = divRef.current;
		if (div)
			html2canvas(div).then((canvas) => {
				const imgData = canvas.toDataURL('image/png');
				const pdf = new jsPDF('p', 'mm');
				const imgWidth = 210;
				const imgHeight = (canvas.height * imgWidth) / canvas.width;
				const pageHeight = 295;
				let heightLeft = imgHeight;
				let position = 0;
				heightLeft -= pageHeight;
				pdf.addImage(imgData, 'JPEG', 0, 10, imgWidth, imgHeight);
				while (heightLeft >= 0) {
					position = heightLeft - imgHeight;
					pdf.addPage();
					pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
					heightLeft -= pageHeight;
				}
				pdf.save('InterviewTimeTable.pdf');
			});

		//색 변경
		setPdfClicked(true);
	};

	//png다운로드 버튼
	const [pngClicked, setPngClicked] = useState(false);
	const onClickPngBtn = async () => {
		if (!divRef.current) return;

		try {
			const div = divRef.current;
			const canvas = await html2canvas(div, { scale: 2 });
			canvas.toBlob((blob) => {
				if (blob !== null) {
					saveAs(blob, 'InterviewTimeTable.png');
				}
			});
		} catch (error) {
			console.error('Error converting div to image:', error);
		}

		//색 변경
		setPngClicked(true);
	};

	const accessToken = localStorage.getItem('isLogin');

	useEffect(() => {
		const getData = async () => {
			await axios({
				url: `/api/v1/interviews/${interviewId}/final`,
				method: 'get',
				headers: {
					Authorization: 'Bearer ' + accessToken,
				},
			})
				.then((response) => {
					console.log(response.data.content);
					setInterviewFinal(response.data.content);
				})
				.catch((error) => console.log(error));
		};
		getData();
	});

	return (
		<>
			<T.Container ref={popUpRef}>
				<div>
					{/*header*/}
					<T.Header>
						<T.Ellipse39 />
						<T.Title>면접 테이블 확정</T.Title>
					</T.Header>
					<img src={process.env.PUBLIC_URL + '/images/lineCircleLong.svg'} />
					<T.TitleText>최종 면접 타임테이블이 확정되었습니다.</T.TitleText>

					{/*타임테이블*/}
					<T.TableWrapper ref={divRef}>
						<FinalTable />
					</T.TableWrapper>

					{interviewFinal.notMatchedApplicants.length > 0 ? (
						<T.NotMatchedWrapper>
							<h3>매칭되지 않은 지원자</h3>
							<T.AvailableApplicantContainer>
								{interviewFinal.notMatchedApplicants.map((p) => (
									<T.AvailableApplicantWrapper>
										<T.IconApplicant />
										<div>
											<span>{`${p.name}(${p.phone.slice(9)})`}</span>
										</div>
									</T.AvailableApplicantWrapper>
								))}
							</T.AvailableApplicantContainer>
						</T.NotMatchedWrapper>
					) : null}

					{/*footer*/}
					<T.ShareBtn onClick={onClickShareBtn}>공유하기</T.ShareBtn>
					{/*pdf, png btn box*/}
					<T.PdfPngBtnBox>
						<T.PdfBtn onClick={onClickPdfBtn} color={pdfClicked}>
							{pdfClicked ? <T.BtnIcon src={process.env.PUBLIC_URL + '/images/clickedPdfIcon.svg'} /> : <T.BtnIcon src={process.env.PUBLIC_URL + '/images/pdfIcon.svg'} />}
							PDF
						</T.PdfBtn>
						<T.PngBtn onClick={onClickPngBtn} color={pngClicked}>
							{pngClicked ? <T.BtnIcon src={process.env.PUBLIC_URL + '/images/clickedPngIcon.svg'} /> : <T.BtnIcon src={process.env.PUBLIC_URL + '/images/pngIcon.svg'} />}
							PNG
						</T.PngBtn>
					</T.PdfPngBtnBox>
				</div>
			</T.Container>
			{isOpen ? <ShareModal setIsOpen={setIsOpen} /> : null}
		</>
	);
}

export default TimeTableConfirm;
