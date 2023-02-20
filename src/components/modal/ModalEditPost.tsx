import React, { useEffect } from 'react';
import ModalPortal from './ModalPotal';
import ModalWrap from './ModalWrap';

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
  return (
    <>
      <ModalPortal>
        <ModalWrap>
          <div className="modal">
            <h1>{item.title}</h1>
            <button onClick={onClose}>닫기</button>
          </div>
        </ModalWrap>
      </ModalPortal>
    </>
  );
};

export default ModalEditPost;
