import styles from "./Home.module.scss";
import { ICONS } from "assets/icons";

function HomePost(props) {
  const {
    updatedAt,
    message,
    title,
    setTitle,
    setMessage,
    setId,
    postId,
    toggleModal,
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
    <div className={styles["post"]}>
      <h4>{title}</h4>
      <p>{message}</p>
      <i>{date}</i>

      <div>
        <button
          onClick={() => (
            setTitle(title),
            setMessage(message),
            setId(postId),
            toggleModal("edit-post")
          )}
        >
          {ICONS.editIcon}
        </button>
        <button
          onClick={() => (
            setId(postId),
            toggleModal("delete-post")
          )}
        >
          {ICONS.deleteIcon}
        </button>
      </div>
    </div>
  );
}

export default HomePost;
