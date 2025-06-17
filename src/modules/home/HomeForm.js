import styles from "./Home.module.scss";
import { useEffect } from "react";
import { Button, Input, Form } from "reactstrap";
import { ICONS } from "assets/icons";

function HomeForm(props) {
  const {
    addPost,
    editPost,
    title,
    setTitle,
    message,
    setMessage,
    setError,
    current,
    toggleModal,
    deletePost
  } = props;

  useEffect(() => {
    setError("");
  }, [title, message]);

  return current === "add-post" || current === "edit-post" ? (
    <Form
      onSubmit={current === "add-post" ? addPost : editPost}
      className={styles["form-post"]}
    >
      <h3>
        {current === "add-post" ? "Add post :" : "Edit Post :"}
        <button onClick={toggleModal}>{ICONS.close}</button>
      </h3>
      <label htmlFor="title">Title: </label>
      <Input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="message">Message: </label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button>{current === "add-post" ? "Add post" : "Edit Post"}</Button>
    </Form>
  ) : current === "delete-post" ? (
    <Form onSubmit={deletePost} className={styles["form-post"]}>
      <p>Notice!</p>
      <p>Are you sure you want to delete this user?</p>
      <div>
        <Button onClick={toggleModal}>Cancel</Button>
        <Button>Delete</Button>
      </div>
    </Form>
  ) : null;
}

export default HomeForm;
