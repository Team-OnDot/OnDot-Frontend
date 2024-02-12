import * as T from "./TimeTableView3.style";
import Side from "../../components/interviewApply/InterviewApplySide"
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import { jsPDF } from "jspdf";
import ReactDOMServer from 'react-dom/server';
import { useRef } from "react";

function TimeTableView3(){
    const divRef = useRef<HTMLDivElement>(null);

    //pdf 다운로드
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
    }

    //png다운로드
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
    };

    return (
        <T.TimeTableView3>
            <Side/>

            <T.Main>

                <div ref={divRef}>
                    <T.TimeTable/>
                </div>                
                <T.ShareBtn>공유하기</T.ShareBtn>
                <T.PdfPngBtnBox>
                    <T.PdfBtn onClick={onClickPdfBtn} >
                        PDF
                    </T.PdfBtn>
                    <T.PngBtn onClick={onClickPngBtn}>
                        PNG
                    </T.PngBtn>
                </T.PdfPngBtnBox>
            </T.Main>
        </T.TimeTableView3>
    );
}

export default TimeTableView3;