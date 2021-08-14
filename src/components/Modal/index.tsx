interface ModalProps {
  toggleModal: () => void;
  isModalHidden: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isModalHidden,
  toggleModal,
  children,
}) => {
  if (isModalHidden) return null;
  return (
    <>
      <div className="modal__overlay" onClick={() => toggleModal()} />
      <div className="modal__wrap">
        <div className="modal">{children}</div>
      </div>
    </>
  );
};

export default Modal;
