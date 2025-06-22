import styles from "./Post.module.scss";
import { useEffect } from "react";
import { ICONS } from "assets/icons";
import { Button, Input, Form, ModalBody, ModalFooter, Card } from "reactstrap";
import ModalContainer from "components/Modal";

function HomeForm(props) {
  const {
    addPost,
    editPost,
    title,
    message,
    setTitle,
    setMessage,
    setError,
    current,
    toggleModal,
    modal,
    error,
  } = props;

  useEffect(() => {
    setError("");
  }, [title, message]);

  return (
    <ModalContainer
      modal={modal}
      toggle={toggleModal}
      title={
        current === "add-post"
          ? "Add Post :"
          : "Edit Post :"
      }
    >
      <Card
        className={
          error
            ? styles["error-pop"]
            : styles["error-pop-hide"]
        }
      >
        {error}
      </Card>
      <Form
        onSubmit={
          current === "add-post" ? addPost : editPost
        }
        className={styles["form-post"]}
      >
        <label htmlFor="title">Title: </label>
        <Input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="message">Message: </label>
        <Input
          type="textarea"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ModalFooter>
          <Button>
            {current === "add-post"
              ? "Add post"
              : "Edit Post"}
          </Button>
        </ModalFooter>
      </Form>
    </ModalContainer>
  );
}

export default HomeForm;
