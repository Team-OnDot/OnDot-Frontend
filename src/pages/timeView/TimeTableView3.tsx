import * as T from "./TimeTableView3.style";
import Side from "../../components/interviewApply/InterviewApplySide"
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import { useRef } from "react";

function TimeTableView3(){
    const divRef = useRef<HTMLDivElement>(null);

    const handleDownload = async () => {
        if (!divRef.current) return;

        try {
        const div = divRef.current;
        const canvas = await html2canvas(div, { scale: 2 });
        canvas.toBlob((blob) => {
            if (blob !== null) {
            saveAs(blob, "result.png");
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
                    <T.PdfBtn>
                        PDF
                    </T.PdfBtn>
                    <T.PngBtn onClick={handleDownload}>
                        PNG
                    </T.PngBtn>
                </T.PdfPngBtnBox>
            </T.Main>
        </T.TimeTableView3>
    );
}

export default TimeTableView3;