import React from 'react';
import ModalPortal from './ModalPotal';
import ModalWrap from './ModalWrap';

interface ModalSignUpType {
  onClose: any;
}

const ModalSignUp: React.FC<ModalSignUpType> = ({ onClose }) => {
  return (
    <>
      <ModalPortal>
        <ModalWrap>
          <div className="modal">
            <h1>회원가입 창</h1>
            id:
            <input />
            password:
            <input />
            password check:
            <input />
            <button>회원 가입</button>
            <button onClick={onClose}>닫기</button>
          </div>
        </ModalWrap>
      </ModalPortal>
    </>
  );
};

export default ModalSignUp;
