//modal props
interface ModalProps {
  toggleModal: () => void;
  isModalHidden: boolean;
}
//modal component
const Modal: React.FC<ModalProps> = ({
  isModalHidden,
  toggleModal,
  children,
}) => {
  if (isModalHidden) return null;
  return (
    <>
      <div className="modal__overlay" onClick={() => toggleModal()} />,
      <div className="moda__wrap">
        <div className="modal">{children}</div>
      </div>
    </>
  );
};

export default Modal;
