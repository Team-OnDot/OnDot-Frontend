import * as T from "./TimeTableView3.style";
import Side from "../../components/interviewApply/InterviewApplySide"
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import { jsPDF } from "jspdf";
import { useRef, useState } from "react";

function TimeTableView3(){
    const divRef = useRef<HTMLDivElement>(null);

    //pdf 다운로드
    const [pdfClicked, setPdfClicked] = useState(false);
    const onClickPdfBtn = () => {

        const div = divRef.current;
        if (div)
          html2canvas(div).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm");
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            const pageHeight = 295;
            let heightLeft = imgHeight;
            let position = 0;
            heightLeft -= pageHeight;
            pdf.addImage(imgData, "JPEG", 0, 10, imgWidth, imgHeight);
            while (heightLeft >= 0) {
              position = heightLeft - imgHeight;
              pdf.addPage();
              pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;
            }
            pdf.save("InterviewTimeTable.pdf");
        });

        //색 변경
        setPdfClicked(true);
    }

    //png다운로드
    const [pngClicked, setPngClicked] = useState(false);
    const onClickPngBtn = async () => {
        if (!divRef.current) return;

        try {
        const div = divRef.current;
        const canvas = await html2canvas(div, { scale: 2 });
        canvas.toBlob((blob) => {
            if (blob !== null) {
                saveAs(blob, "InterviewTimeTable.png");
            }
        });
        } catch (error) {
            console.error("Error converting div to image:", error);
        }

        //색 변경
        setPngClicked(true);
    };

    return (
        <T.TimeTableView3>
            <Side/>

            <T.Main>
                {/*header*/}
                <T.Header>
                    <T.Ellipse39/>
                    <T.Title>면접 테이블 확정</T.Title>
                </T.Header>
                <img src={process.env.PUBLIC_URL + '/images/lineCircleLong.svg'}/>
                <T.TitleText>최종 면접 타임테이블이 확정되었습니다.</T.TitleText>

                {/*타임테이블(main) */}
                <div ref={divRef}>
                    <T.TimeTable/>
                </div>      

                {/*footer*/}   
                <T.ShareBtn>공유하기</T.ShareBtn>
                {/*pdf, png btn box*/}   
                <T.PdfPngBtnBox>
                    <T.PdfBtn onClick={onClickPdfBtn} color={pdfClicked}>
                        {pdfClicked ? <T.BtnIcon src={process.env.PUBLIC_URL + '/images/clickedPdfIcon.svg'}/> :
                        <T.BtnIcon src={process.env.PUBLIC_URL + '/images/pdfIcon.svg'}/>}                        
                        PDF
                    </T.PdfBtn>
                    <T.PngBtn onClick={onClickPngBtn} color={pngClicked}>
                        {pngClicked ? <T.BtnIcon src={process.env.PUBLIC_URL + '/images/clickedPngIcon.svg'}/> :
                        <T.BtnIcon src={process.env.PUBLIC_URL + '/images/pngIcon.svg'}/>}    
                        PNG
                    </T.PngBtn>
                </T.PdfPngBtnBox>
            </T.Main>
        </T.TimeTableView3>
    );
}

export default TimeTableView3;