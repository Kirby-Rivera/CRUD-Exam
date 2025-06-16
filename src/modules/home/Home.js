import styles from "./Home.module.scss";
import useHome from "./useHome";
import HomePostSection from "./HomePostSection";
import HomeAddForm from "./HomeAddForm";

function Home() {
  const {
    posts,
    addPost,
    title,
    setTitle,
    message,
    setMessage,
    error
  } = useHome();

  return (
    <div className={styles["home"]}>
      <HomeAddForm addPost={addPost} title={title} setTitle={setTitle} message={message} setMessage={setMessage} error={error}/>
      <HomePostSection posts={posts} />
    </div>
  );
}

export default Home;
