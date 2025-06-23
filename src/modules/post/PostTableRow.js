import styles from "./Post.module.scss";
import { ICONS } from "assets/icons";

function PostTableRow(props) {
  const {
    updatedAt,
    message,
    title,
    setTitle,
    setMessage,
    setId,
    postId,
    setCurrentModal,
    setModal,
    setDelModal,
    modal,
    index,
  } = props;

  const created_at = new Date(updatedAt);

  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const date = created_at.toLocaleString("en-US", options);

  return (
    <tr className={styles["table-row"]}>
      <td className={styles["postid"]}>{index}</td>
      <td>{title}</td>
      <td>{message}</td>
      <td>{date}</td>

      <td className={styles["table-actions"]}>
        <button
          onClick={() => {
            setTitle(title);
            setMessage(message);
            setId(postId);
            setModal(!modal);
            setCurrentModal("view-post");
          }}
        >
          {ICONS.viewIcon}
        </button>
        <button
          onClick={() => {
            setTitle(title);
            setMessage(message);
            setId(postId);
            setModal(!modal);
            setCurrentModal("edit-post");
          }}
        >
          {ICONS.editIcon}
        </button>
        <button
          onClick={() => {
            setId(postId);
            setDelModal(!modal);
            setCurrentModal("delete-post");
          }}
        >
          {ICONS.deleteIcon}
        </button>
      </td>
    </tr>
  );
}

export default PostTableRow;
