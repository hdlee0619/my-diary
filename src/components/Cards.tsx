import React from 'react';
import { useDispatch } from 'react-redux';
import { __deletePost } from '../redux/modules/post';

// 일단 any로 처리
interface CardsProps {
  item: any;
}

const Cards: React.FC<CardsProps> = ({ item }) => {
  const dispatch: any = useDispatch();
  const deleteBtnHandler = (id: number) => {
    dispatch(__deletePost(id));
  };

  return (
    <div className="card">
      <h1>{item.title}</h1>
      <div>
        <span>{item.date}</span>
        <span>{item.weather}</span>
        <span>{item.author}</span>
      </div>
      <div>
        <button>수정</button>
        <button onClick={() => deleteBtnHandler(item.id)}>삭제</button>
      </div>
    </div>
  );
};

export default Cards;
