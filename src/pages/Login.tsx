import axios from 'axios';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import ModalSignUp from '../components/modal/ModalSignUp';
import useInput from '../hooks/useInput';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [{ id, password }, inputHandler, resetInputValue] = useInput({ id: '', password: '' });
  const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
  const navigate = useNavigate();
  let success = false;

  const signInHandler = async (e: any) => {
    e.preventDefault();
    logInUser(id, password);
    resetInputValue();
    if (success) {
      checkCookie(id, password);
    }
    navigate('/');
  };

  const logInUser = async (id: string, passowrd: string) => {
    await axios
      .post('http://3.38.191.164/login', { id, password })
      .then((response) => {
        setCookie('userToken', response.data.token);
        success = !success;
      })
      .catch(() => {
        alert('에러');
      });
  };

  const checkCookie = async (id: string, password: string) => {
    const token = cookies.userToken;
    await axios
      .get('http://3.38.191.164/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        alert(response.data.message);
        navigate('/');
      })
      .catch(() => {
        removeCookie('userToken');
        alert('checkCookie error');
      });
  };

  return (
    <>
      <div>
        <form onSubmit={signInHandler}>
          id: <input value={id} onChange={inputHandler} name="id" />
          password: <input value={password} onChange={inputHandler} name="password" />
          <button>로그인 하기</button>
        </form>
      </div>
      <div>
        <button onClick={() => setOpenSignUpModal(true)}>회원 가입 하기</button>
      </div>
      {openSignUpModal && <ModalSignUp onClose={() => setOpenSignUpModal(false)}></ModalSignUp>}
    </>
  );
};

export default Login;
