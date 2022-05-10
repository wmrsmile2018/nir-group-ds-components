import React, { useCallback, useRef, useEffect } from 'react'; 
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};


const Modal = ({ className, children, idNode,
  isCloseAble = true,
  onSubmit = () => {},
  buttonLabel, }) => {
  const modalRef = useRef(null);
  const portalref = useRef(null);
  const el = document.getElementById(idNode);

  const handleOnClickOutside = useCallback(() => {
    isCloseAble && modalRef && el.removeChild(portalref.current);
  }, [portalref, isCloseAble]);

  const handleOnSubmit = useCallback(() => {
    isCloseAble && modalRef && el.removeChild(portalref.current);
    onSubmit();
  }, [portalref, isCloseAble]);

  const handleOnCloseModal = useCallback(() => {
    modalRef && el.removeChild(portalref.current);
  }, [modalRef]);

  useOnClickOutside(modalRef, handleOnClickOutside);

  if (!el) return null;

  return ReactDOM.createPortal(
    <div ref={portalref} id='portal'>
      <div className='modal-overlay' />
      <div ref={modalRef} className={`modal ${className}`}>
        <div className='modal-header'>
          {isCloseAble && (
            <svg
              onClick={handleOnCloseModal}
              fill='#000000'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='modal-close'
            >
              <path d='M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z' />
            </svg>
          )}
        </div>
        <div className='modal-content'>{children}</div>
        <div className='modal-footer'>
          <button onClick={handleOnSubmit}>{buttonLabel}</button>
        </div>
      </div>
    </div>,
    el
  );
};

export default React.memo(Modal);

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  idNode: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  className: "",
};
