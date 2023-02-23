import React from 'react';
import ModalPortal from './ModalPotal';
import ModalWrap from './ModalWrap';
import axios from 'axios';
import useInput from '../../hooks/useInput';
import Btn from '../Btn';

interface ModalSignUpType {
  onClose: any;
}

const ModalSignUp: React.FC<ModalSignUpType> = ({ onClose }) => {
  const [{ userId, userPassword, passwordCheck }, inputHandler] = useInput({ userId: '', userPassword: '', passwordCheck: '' });
  let checkSuccess = false;

  const submitFormHandler = (e: any) => {
    e.preventDefault();
    checkSuccess = false;
    checkSignUpInfo(userId, userPassword, passwordCheck);
    if (checkSuccess) {
      signUpUserInfo(userId, userPassword);
    }
  };

  const checkSignUpInfo = (userId: string, userPassword: string, passwordCheck: string) => {
    const regId = /^[a-z]+[a-z0-9]{5,19}$/g;
    const regPassword = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    if (userPassword !== passwordCheck) {
      return alert('password가 일치하지 않습니다.');
    } else if (userId.trim().length < 5) {
      return alert('id는 영문 소문자, 숫자 5자리 이상');
    } else if (!regId.test(userId)) {
      return alert('id는 영문 소문자, 숫자 5자리 이상');
    } else if (!regPassword.test(userPassword)) {
      return alert('password는 영어, 숫자, 특수문자 포함 8-15자리');
    }
    return (checkSuccess = true);
  };

  const signUpUserInfo = async (id: string, password: string) => {
    const response = await axios.post(`${process.env.REACT_APP_LOG_IN_URL}/register`, { id: String(userId), password: String(userPassword) });
    console.log(response.status);
    if (response.status === 201) {
      onClose();
      return alert('회원가입 성공');
    }
  };

  return (
    <>
      <ModalPortal>
        <ModalWrap>
          <div className="signup-modal">
            <form onSubmit={submitFormHandler}>
              <h2>회원가입 창</h2>

              <div className="info-box">
                <span>id :</span>
                <input value={userId} onChange={inputHandler} name="userId" />
                <span>영어 소문자, 숫자 5자리 이상</span>
                <span>password :</span>
                <input value={userPassword} onChange={inputHandler} name="userPassword" />
                <span>영어, 숫자, 특수문자 포함 8-15자리</span>
                <span>password check : </span>
                <input value={passwordCheck} onChange={inputHandler} name="passwordCheck" />
              </div>
              <div className="btn-wrapper">
                <Btn className="modal-submit-btn">회원 가입</Btn>
                <Btn className="modal-close-btn" onClick={onClose}>
                  닫기
                </Btn>
              </div>
            </form>
          </div>
        </ModalWrap>
      </ModalPortal>
    </>
  );
};

export default ModalSignUp;
