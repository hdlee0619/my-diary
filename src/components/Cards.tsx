import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __deletePost } from '../redux/modules/post';
import ModalEditPost from './modal/ModalEditPost';

// 일단 any로 처리
interface CardsProps {
  item: any;
}

const Cards: React.FC<CardsProps> = ({ item }) => {
  const dispatch: any = useDispatch();
  const deleteBtnHandler = (id: number) => {
    dispatch(__deletePost(id));
  };

  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(true);
  };

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
          <button onClick={openModalHandler}>수정</button>
          <button onClick={() => deleteBtnHandler(item.id)}>삭제</button>
        </div>
      </div>
      {isOpen && <ModalEditPost onClose={() => setIsOpen(false)} item={item}></ModalEditPost>}
    </>
  );
};

export default Cards;
