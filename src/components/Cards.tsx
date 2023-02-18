import React from 'react';

// 일단 any로 처리
interface CardsProps {
  item: any;
}

const Cards: React.FC<CardsProps> = ({ item }) => {
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
        <button>삭제</button>
      </div>
    </div>
  );
};

export default Cards;
