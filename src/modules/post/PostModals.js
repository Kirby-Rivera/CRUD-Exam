import styles from "./Post.module.scss";
import { useEffect } from "react";
import { Button, Input, Form, ModalFooter, Card } from "reactstrap";
import ModalContainer from "components/Modal";

function PostModals(props) {
  const {
    addPost,
    editPost,
    title,
    message,
    setTitle,
    setMessage,
    setError,
    current,
    setModal,
    modal,
    error,
  } = props;

  useEffect(() => {
    setError("");
  }, [title, message]);

  return (
    <ModalContainer
      modal={modal}
      toggle={() => setModal(!modal)}
      title={
        current === "add-post"
          ? "Add Post :"
          : current === "edit-post"
          ? "Edit Post :"
          : "View Post"
      }
    >
      <Card className={error ? styles["error-pop"] : styles["error-pop-hide"]}>
        {error}
      </Card>

      <Form
        onSubmit={
          current === "add-post"
            ? addPost
            : current === "edit-post"
            ? editPost
            : (e) => {
                e.preventDefault();
                setModal(false);
              }
        }
        className={styles["form-post"]}
      >
        <label htmlFor="title">Title: </label>
        <Input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={current === "view-post"}
        />
        <label htmlFor="message">Message: </label>
        <Input
          type="textarea"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={current === "view-post"}
        />
        <ModalFooter>
          <Button>
            {current === "add-post"
              ? "Add post"
              : current === "edit-post"
              ? "Edit Post"
              : "Close"}
          </Button>
        </ModalFooter>
      </Form>
    </ModalContainer>
  );
}

export default PostModals;
