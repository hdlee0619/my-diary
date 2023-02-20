import React from 'react';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { __writePost } from '../redux/modules/post';

const Form = () => {
  const userID = 'hdlee0619'; // JWT 구현 전이라 일단 default로 userId 생성

  const [{ title, date, weather, author, contents }, setPostData] = useInput({
    title: '',
    date: '',
    weather: '',
    author: userID,
    contents: '',
  });

  // 우선 any로 처리
  const dispatch = useDispatch();
  const submitPostHandler = (e: any) => {
    e.preventDefault();
    dispatch(__writePost({ title, date, weather, contents, author }) as any);
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
