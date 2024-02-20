import * as F from '../FindAccount.style';
import { FieldErrors, useForm } from 'react-hook-form';

type IUserData = {
    email: string;
  }

function FindId() {

    const {
        register,
        handleSubmit,
        watch,
        resetField,
        setError,
        formState: { errors }
    } = useForm<IUserData>({ mode: 'onBlur' })

    
    //입력 취소 버튼
    const removeInput = (name:any) => {
        resetField(name);
        setError(name,  {message: ''});
    }

    const onValid = (data: IUserData) => {
        
    }

    return(
        <div>
            <F.Header>
                <F.HeaderTitle>비밀번호 찾기</F.HeaderTitle>
                <F.HeaderText>가입한 이메일로 비밀번호 변경 링크가 포함된 메일을 전송해 드립니다.</F.HeaderText>
            </F.Header>

            <F.Main>
                <F.FormTitle>
                    <F.Ellipse></F.Ellipse>
                    비밀번호 찾기
                </F.FormTitle>

                <F.FindForm onSubmit={handleSubmit(onValid)}>
                    <F.InputBox
                        toggle={watch("email")?.length > 0 ? true: false || errors.email ? true: false}  
                        color={errors.email ? '#FF4A4A': '#606060'}
                    >
                        <F.Input
                            id="email"
                            type="text"
                            placeholder="이메일을 입력해 주세요"
                            {...register("email",{
                                required: true,
                                pattern: {
                                    value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                                    message: "입력한 계정과 일치하는 계정이 없습니다."
                                },                            
                            })}
                            
                        />
                        {watch("email")?.length > 0 && 
                            <F.InputCancelBtn 
                                src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                                onClick={e => removeInput("email")}
                            />
                        }
                    </F.InputBox>

                    <F.ErrorMessage>
                        <F.ErrorText error={errors.email ? true : false}>
                            존재하지 않는 이메일입니다.
                        </F.ErrorText>
                    </F.ErrorMessage>

                    {/*버튼*/}
                    <F.SubmitBtn type="submit">메일보내기</F.SubmitBtn>
                </F.FindForm>
            </F.Main>
        </div>
    );
}

export default FindId;