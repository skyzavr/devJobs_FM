import { ReactNode } from 'react';

import cn from './modal.module.css';

type props = {
  onHandleModal: () => void;
  children: ReactNode;
};

export const Modal = ({ onHandleModal, children }: props) => {
  return (
    <div className={cn.wrapperModal}>
      <div className={cn.close} onClick={onHandleModal}></div>
      <div className={cn.wrapperModalInner}>{children}</div>
    </div>
  );
};
