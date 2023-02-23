import React from 'react';

interface btnType {
  children: string;
  className?: string;
  onClick: () => void;
}

const Btn = ({ children, onClick }: btnType) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
};

export default Btn;
