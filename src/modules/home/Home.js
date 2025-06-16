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
    error,
    loading,
    deletePost,
  } = useHome();

  return (
    <div className={styles["home"]}>
      <p className={error ? styles["success"] : styles["success-hide"]}>
        {error}
      </p>
      <HomeAddForm
        addPost={addPost}
        title={title}
        setTitle={setTitle}
        message={message}
        setMessage={setMessage}
      />
      <HomePostSection
        deletePost={deletePost}
        posts={posts}
        loading={loading}
      />
    </div>
  );
}

export default Home;
