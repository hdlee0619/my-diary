import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __deletePost, __getPost } from '../redux/modules/post';
import ModalDetail from './modal/ModalDetail';
import ModalEditPost from './modal/ModalEditPost';
import Btn from './Btn';

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
        <h2>{item.title}</h2>
        <div>
          <span>Date : </span>
          <span>{item.date}</span>
          <br />
          <span>Weather : </span>
          <span>{item.weather}</span>
          <br />
          <span>ID : </span>
          <span>{item.author}</span>
        </div>
        <div>
          <Btn className="detail" onClick={() => setIsOpenDetail(true)}>
            상세보기
          </Btn>
          <Btn className="edit" onClick={() => setIsOpenEditPost(true)}>
            수정
          </Btn>
          <Btn className="delete" onClick={() => deleteBtnHandler(item.id)}>
            삭제
          </Btn>
        </div>
      </div>
      {isOpenEditPost && <ModalEditPost onClose={() => setIsOpenEditPost(false)} item={item}></ModalEditPost>}
      {isOpenDetail && <ModalDetail onClose={() => setIsOpenDetail(false)} item={item}></ModalDetail>}
    </>
  );
};

export default Cards;
