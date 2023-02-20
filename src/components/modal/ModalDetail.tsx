import React, { useRef } from 'react';
import ModalPortal from './ModalPotal';
import ModalWrap from './ModalWrap';
import useOutSideClick from '../../hooks/useOutSideClick';

interface ModalPropsType {
  item: any;
  onClose: any;
}

const ModalDetail: React.FC<ModalPropsType> = ({ onClose, item }) => {
  const modalRef = useRef(null);
  useOutSideClick(modalRef, onClose);
  return (
    <>
      <ModalPortal>
        <ModalWrap>
          <div className="modal" ref={modalRef}>
            <h2>{item.title}</h2>
            <span>{item.date}</span>
            <span>{item.weather}</span>
            <span>{item.author}</span>
            <p>{item.contents}</p>
            <button onClick={onClose}>닫기</button>
          </div>
        </ModalWrap>
      </ModalPortal>
    </>
  );
};

export default ModalDetail;
