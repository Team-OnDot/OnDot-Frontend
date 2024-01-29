import { useNavigate } from 'react-router-dom';
import * as I from './InputInfo.style';

function InputInfo() {

	const navigate = useNavigate();

	return (
		<div>
            {/*header*/}
            <I.InputInfoHeader>
                <I.Ellipse1/>
                지원 정보 입력
            </I.InputInfoHeader>
            <img src={process.env.PUBLIC_URL + '/images/lineCircleShort.svg'}/>

            {/*Main(지원 정보 입력폼)*/}
            <I.ApplyForm>

            </I.ApplyForm>
        </div>
	);
}

export default  InputInfo;