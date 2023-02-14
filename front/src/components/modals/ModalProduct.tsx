import React, { useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
}

const ModalProduct: React.FC<ModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const modalRoot = document.getElementById("modal-root");

  if (isOpen && modalRoot) {
    return ReactDOM.createPortal(children, modalRoot);
  }

  return null;
};

export default ModalProduct;