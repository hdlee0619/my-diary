import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import ModalSignUp from '../components/modal/ModalSignUp';
import useInput from '../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import Btn from '../components/Btn';

const Login = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [{ id, password }, inputHandler, resetInputValue] = useInput({ id: '', password: '' });
  const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
  const navigate = useNavigate();
  let success = false;

  const token = cookies.userToken;
  useEffect(() => {
    checkToken(token);
  }, [cookies.userToken]);

  const signInHandler = async (e: any) => {
    e.preventDefault();
    logInUser(id, password);
    success = !success;
    resetInputValue();
    if (success) {
      checkToken(token);
      return (success = !success);
    }
  };

  const logInUser = async (id: string, passowrd: string) => {
    await axios
      .post(`${process.env.REACT_APP_LOG_IN_URL}/login`, { id, password })
      .then((response) => {
        setCookie('userToken', response.data.token);
      })
      .catch(() => {
        alert('login 에러');
      });
  };

  const checkToken = async (token: string) => {
    await axios
      .get(`${process.env.REACT_APP_LOG_IN_URL}/user`, {
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
      });
  };

  return (
    <>
      <div className="login-container">
        <form className="form-wrapper" onSubmit={signInHandler}>
          <div className="modal">
            id: <input value={id} onChange={inputHandler} name="id" />
            password: <input value={password} onChange={inputHandler} name="password" />
            <div className="btn-wrapper">
              <Btn className="modal-submit-btn">로그인 하기</Btn>
              <Btn className="signup-btn" onClick={() => setOpenSignUpModal(true)}>
                회원 가입 하기
              </Btn>
            </div>
          </div>
        </form>
        <div>{openSignUpModal && <ModalSignUp onClose={() => setOpenSignUpModal(false)}></ModalSignUp>}</div>
      </div>
    </>
  );
};

export default Login;
