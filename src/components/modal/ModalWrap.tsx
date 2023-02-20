import React from 'react';

interface ModalWrapType {
  children: any;
}

const ModalWrap: React.FC<ModalWrapType> = ({ children }) => {
  return (
    <div className="modal_overlay">
      <div className="modal_wrapper">{children}</div>
    </div>
  );
};

export default ModalWrap;
