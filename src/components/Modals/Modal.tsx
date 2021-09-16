import ModalProps from "./IModal";
import './modal.scss';

const Modal = (props: ModalProps) => {
  const { children } = props;

  return (
    <div className='modal'>
      <section className="modal-main">
        {children}
      </section>
    </div>
  );
};


export default Modal;