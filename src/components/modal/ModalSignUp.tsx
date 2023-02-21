import React from 'react';
import ModalPortal from './ModalPotal';
import ModalWrap from './ModalWrap';
import axios from 'axios';
import useInput from '../../hooks/useInput';

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
    if (userPassword !== passwordCheck) {
      return alert('password가 일치하지 않습니다.');
    } else if (userId.trim().length < 5) {
      return alert('id는 6글자 이상 입력');
    } else if (!regId.test(userId)) {
      return alert('id는 영문자 또는 숫자 6~20');
    }
    return (checkSuccess = true);
  };

  const signUpUserInfo = async (id: string, password: string) => {
    const response = await axios.post('http://3.38.191.164/register', { id: String(userId), password: String(userPassword) });
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
          <div className="modal">
            <form onSubmit={submitFormHandler}>
              <h1>회원가입 창</h1>
              id:
              <input value={userId} onChange={inputHandler} name="userId" />
              password:
              <input value={userPassword} onChange={inputHandler} name="userPassword" />
              password check:
              <input value={passwordCheck} onChange={inputHandler} name="passwordCheck" />
              <button>회원 가입</button>
            </form>
            <button onClick={onClose}>닫기</button>
          </div>
        </ModalWrap>
      </ModalPortal>
    </>
  );
};

export default ModalSignUp;
