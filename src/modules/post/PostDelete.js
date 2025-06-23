import { Button, ModalFooter, ModalBody } from "reactstrap";
import { ICONS } from "assets/icons";
import ModalContainer from "components/Modal";
import styles from "./Post.module.scss";

function PostDelete(props) {
  const { deletePost, current, delModal, setDelModal } = props;

  return (
    current === "delete-post" && (
      <ModalContainer
        modal={delModal}
        title={"Notice!"}
        toggle={() => setDelModal(!delModal)}
      >
        <div className={styles["warning-logo"]}>{ICONS.warning}</div>
        <ModalBody className="text-center">
          Are you sure you want to delete this post?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={deletePost}>
            Delete
          </Button>
          <Button onClick={() => setDelModal(!delModal)}>Cancel</Button>
        </ModalFooter>
      </ModalContainer>
    )
  );
}

export default PostDelete;
