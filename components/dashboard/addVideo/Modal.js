import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Link from 'next/link'


const Modal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
      e.preventDefault();
      onClose();
    };

    const modalContent = show ? (
      <div className="modal">
        <div className="container-modal">
          <div className="header-modal">
            <h3 className="h1">{title}</h3>
            <Link href="/" onClick={handleCloseClick}><i className="bi bi-x"></i></Link>
          </div>
          <div className="body-modal">{children}</div>
        </div>
      </div>
    ) : null;

    if (isBrowser) {
      return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
      );
    } else {
      return null;
    }
  };


export default Modal;
