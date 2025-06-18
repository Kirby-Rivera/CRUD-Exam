import { Button, ModalFooter, ModalBody } from "reactstrap";
import { ICONS } from "assets/icons";
import ModalContainer from "components/Modal";
import styles from "./Post.module.scss";

function PostDelete(props) {
  const { deletePost, modal, toggleModal, current } = props;

  return (
    current === "delete-post" && (
      <ModalContainer modal={modal} toggle={toggleModal} title={"Notice!"}>
        {ICONS.warning}
        <ModalBody className={styles["modal-body"]}>
          Are you sure you want to delete this post?
        </ModalBody>
        <ModalFooter>
          <Button onClick={deletePost}>Delete</Button>
          <Button onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </ModalContainer>
    )
  );
}

export default PostDelete;
