import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __deletePost, __getPost } from '../redux/modules/post';
import ModalDetail from './modal/ModalDetail';
import ModalEditPost from './modal/ModalEditPost';

// 일단 any로 처리
interface CardsProps {
  item: any;
}

const Cards: React.FC<CardsProps> = ({ item }) => {
  const dispatch: any = useDispatch();

  const deleteBtnHandler = async (id: number) => {
    await dispatch(__deletePost(id));
    dispatch(__getPost());
  };

  const [isOpenEditPost, setIsOpenEditPost] = useState(false);

  const [isOpenDetail, setIsOpenDetail] = useState(false);

  return (
    <>
      <div className="card">
        <h1>{item.title}</h1>
        <div>
          <span>{item.date}</span>
          <span>{item.weather}</span>
          <span>{item.author}</span>
        </div>
        <div>
          <button onClick={() => setIsOpenDetail(true)}>상세보기</button>
          <button onClick={() => setIsOpenEditPost(true)}>수정</button>
          <button onClick={() => deleteBtnHandler(item.id)}>삭제</button>
        </div>
      </div>
      {isOpenEditPost && <ModalEditPost onClose={() => setIsOpenEditPost(false)} item={item}></ModalEditPost>}
      {isOpenDetail && <ModalDetail onClose={() => setIsOpenDetail(false)} item={item}></ModalDetail>}
    </>
  );
};

export default Cards;
