import styles from "./Home.module.scss";
import useHome from "./useHome";
import HomePostSection from "./HomePostSection";
import HomeForm from "./HomeForm";
import { Button } from "reactstrap";
import { ICONS } from "assets/icons";

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
    setError,
    editPost,
    setId,
    toggleModal,
    currentModal,
    clearInputs,
  } = useHome();

  return (
    <div className={styles["home"]}>
      <Button
        className={styles["add-btn"]}
        onClick={() => (toggleModal("add-post"), clearInputs())}
      >
        Add new post {ICONS.add}
      </Button>
      <p className={error ? styles["success"] : styles["success-hide"]}>
        {error}
      </p>
      <HomeForm
        addPost={addPost}
        editPost={editPost}
        title={title}
        setTitle={setTitle}
        message={message}
        setMessage={setMessage}
        setError={setError}
        current={currentModal}
        toggleModal={toggleModal}
        deletePost={deletePost}
      />
      <HomePostSection
        posts={posts}
        loading={loading}
        setTitle={setTitle}
        setMessage={setMessage}
        setId={setId}
        toggleModal={toggleModal}
      />
    </div>
  );
}

export default Home;
