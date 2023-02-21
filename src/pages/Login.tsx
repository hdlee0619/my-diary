import React, { useState } from 'react';
import ModalSignUp from '../components/modal/ModalSignUp';

const Login = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setOpenSignUpModal(true)}>회원 가입 하기</button>
      </div>
      {openSignUpModal && <ModalSignUp onClose={() => setOpenSignUpModal(false)}></ModalSignUp>}
    </>
  );
};

export default Login;
