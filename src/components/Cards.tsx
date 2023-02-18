import React from 'react';

const Cards = () => {
  return (
    <div className="card">
      <h1>Title</h1>
      <div>
        <span>date</span>
        <span>weather</span>
        <span>author</span>
      </div>
      <div>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default Cards;
