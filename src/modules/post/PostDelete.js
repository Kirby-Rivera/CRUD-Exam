import { Button, ModalFooter, ModalBody } from "reactstrap";
import { useState } from "react";
import { ICONS } from "assets/icons";
import ModalContainer from "components/Modal";
import styles from "./Post.module.scss";

function PostDelete(props) {
  const { deletePost, current, modal, toggleModal } = props;

  return (
    current === "delete-post" && (
      <ModalContainer modal={modal} title={"Notice!"}>
        <div className={styles["warning-logo"]}>{ICONS.warning}</div>
        <ModalBody className="text-center">
          Are you sure you want to delete this post?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={deletePost}>
            Delete
          </Button>
          <Button onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </ModalContainer>
    )
  );
}

export default PostDelete;
