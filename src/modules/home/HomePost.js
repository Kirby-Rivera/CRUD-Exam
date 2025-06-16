import styles from "./Home.module.scss";

function HomePost(props) {
  const { createdAt, message, title } = props;

  const created_at = new Date(createdAt);

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
      
    </div>
  );
}

export default HomePost;
