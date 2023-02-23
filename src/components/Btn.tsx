import React from 'react';

interface btnType {
  children: string;
  className?: string;
  onClick?: () => void;
}

const Btn = ({ className, children, onClick }: btnType) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Btn;
