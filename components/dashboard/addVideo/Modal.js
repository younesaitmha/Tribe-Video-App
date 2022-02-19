import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";


const Modal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
      setIsBrowser(true);
      console.log(children)
    }, []);

    const handleCloseClick = (e) => {
      e.preventDefault();
      onClose();
    };

    const modalContent = show ? (
      <div className="modal">
        <div className="container-modal">
          <div className="header-modal">
            <h3>{title}</h3>
            <a href="/" onClick={handleCloseClick}><i class="bi bi-x"></i></a>
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
