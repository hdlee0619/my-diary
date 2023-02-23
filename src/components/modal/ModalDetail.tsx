import React, { useRef } from 'react';
import ModalPortal from './ModalPotal';
import ModalWrap from './ModalWrap';
import useOutSideClick from '../../hooks/useOutSideClick';
import Btn from '../Btn';

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
            <div className="info-box">
              <span>Date : </span>
              &nbsp;<span>{item.date}</span>
              <br />
              <span>Weather : </span>
              &nbsp;<span>{item.weather}</span>
              <br />
              <span>ID : </span>
              &nbsp;<span>{item.author}</span>
            </div>
            <div className="contents-box">
              <p>{item.contents}</p>
            </div>
            <div className="btn-wrapper">
              <Btn className="modal-close-btn" onClick={onClose}>
                닫기
              </Btn>
            </div>
          </div>
        </ModalWrap>
      </ModalPortal>
    </>
  );
};

export default ModalDetail;
