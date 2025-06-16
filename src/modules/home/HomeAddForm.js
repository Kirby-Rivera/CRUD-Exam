import styles from "./Home.module.scss";
import { Button, Input, Form } from "reactstrap";

function HomeAddForm(props) {
  const {
    addPost,
    title,
    setTitle,
    message,
    setMessage,
  } = props;

  return (
    <Form onSubmit={addPost} className={styles["add-post"]}>
      <h3>Add a post</h3>
      <label htmlFor="title">Title: </label>
      <Input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="message">Message: </label>
      <Input
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button color="secondary">Add Post</Button>
    </Form>
  );
}

export default HomeAddForm;
