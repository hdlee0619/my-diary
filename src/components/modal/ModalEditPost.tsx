import React, { useEffect } from 'react';
import ModalPortal from './ModalPotal';
import ModalWrap from './ModalWrap';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { __editPost, __getPost } from '../../redux/modules/post';

interface ModalPropsType {
  item: any;
  onClose: any;
}

const ModalEditPost: React.FC<ModalPropsType> = ({ item, onClose }) => {
  useEffect(() => {
    const $body: any = document.querySelector('body');
    const overflow = $body.style.overflow;
    $body.style.overflow = 'hidden';
    return () => {
      $body.style.overflow = overflow;
    };
  }, []);

  const dispatch = useDispatch();

  const [{ id, title, date, weather, contents }, setEditPostData] = useInput({
    id: item.id,
    title: item.title,
    date: item.date,
    weather: item.weather,
    author: item.author,
    contents: item.contents,
  });
  // 우선 any로 처리
  const editSubmitHandler = async (e: any) => {
    e.preventDefault();
    await dispatch(__editPost({ id, title, date, weather, contents }) as any);
    dispatch(__getPost() as any);
    onClose();
  };
  return (
    <>
      <ModalPortal>
        <ModalWrap>
          <div className="modal">
            <form onSubmit={editSubmitHandler}>
              <input value={title} onChange={setEditPostData} name="title" />
              <input value={date} onChange={setEditPostData} name="date" />
              <input value={weather} onChange={setEditPostData} name="weather" />
              <input value={contents} onChange={setEditPostData} name="contents" />
              <button>제출</button>
            </form>
            <button onClick={onClose}>취소</button>
          </div>
        </ModalWrap>
      </ModalPortal>
    </>
  );
};

export default ModalEditPost;
