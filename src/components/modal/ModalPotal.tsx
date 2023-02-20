import React from 'react';

import { createPortal } from 'react-dom';

interface ModalPortalType {
  children: any;
}

// 일단 any로 처리
const ModalPortal: React.FC<ModalPortalType> = ({ children }) => {
  return createPortal(<>{children}</>, document.getElementById('modal') as any);
};

export default ModalPortal;
