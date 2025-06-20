import { Modal, ModalHeader } from "reactstrap";
import styles from "./Comp.module.scss";

const ModalContainer = (props) => {
  const { modal, toggle, children, title } = props;

  return (
    <div>
      <Modal
        centered
        isOpen={modal}
        toggle={toggle}
        className={styles["main-modal"]}
      >
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        {children}
      </Modal>
    </div>
  );
};

export default ModalContainer;
