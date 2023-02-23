import React from 'react';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { __writePost, __getPost } from '../redux/modules/post';
import { useNavigate } from 'react-router-dom';
import Btn from './Btn';

const Form = () => {
  const userID = 'hdlee0619'; // JWT 구현 전이라 일단 default로 userId 생성
  const navigate = useNavigate();

  const [{ title, date, weather, author, contents }, setPostData] = useInput({
    title: '',
    date: '',
    weather: '',
    author: userID,
    contents: '',
  });

  // 우선 any로 처리
  const dispatch = useDispatch();

  const submitPostHandler = async (e: any) => {
    e.preventDefault();
    await dispatch(__writePost({ title, date, weather, contents, author }) as any);
    dispatch(__getPost() as any);
    navigate('/');
  };

  return (
    <div className="form-wrapper">
      <form className="write-box" onSubmit={submitPostHandler}>
        <span>title : </span>
        <input className="title" value={title} onChange={setPostData} name="title" />
        <div className="info-box">
          <span>date : </span>
          <input type="date" value={date} onChange={setPostData} name="date" />
          <span>weather : </span>
          <input value={weather} onChange={setPostData} name="weather" />
        </div>
        <div className="contents-box">
          <span>contents :</span>
          <textarea value={contents} onChange={setPostData} name="contents" />
        </div>
        <div className="btn-wrapper">
          <Btn className="modal-submit-btn">등록</Btn>
        </div>
      </form>
    </div>
  );
};

export default Form;
