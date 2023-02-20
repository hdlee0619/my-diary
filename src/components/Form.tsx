import React from 'react';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { __writePost, __getPost } from '../redux/modules/post';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <form onSubmit={submitPostHandler}>
        title: <input value={title} onChange={setPostData} name="title" />
        date : <input type="date" value={date} onChange={setPostData} name="date" />
        weather : <input value={weather} onChange={setPostData} name="weather" />
        contents :
        <input value={contents} onChange={setPostData} name="contents" />
        <button>등록</button>
      </form>
    </div>
  );
};

export default Form;
