import styles from "./Post.module.scss";
import usePost from "./usePost";
import PostTable from "./PostTable";
import PostModals from "./PostModals";
import PostDelete from "./PostDelete";
import { Button, Toast, ToastHeader } from "reactstrap";
import { ICONS } from "assets/icons";
import PostPageNav from "./PostPageNav";

function Home() {
  const {
    posts,
    addPost,
    title,
    setTitle,
    message,
    setMessage,
    error,
    success,
    loading,
    deletePost,
    setError,
    editPost,
    setId,
    toggleModal,
    currentModal,
    setCurrentModal,
    clearInputs,
    modal,
    currentPage,
    totalPages,
    handlePageChange,
    startIndex,
  } = usePost();

  return (
    <div className={styles["home"]}>
      <Toast
        className={success ? styles["success-pop"] : styles["success-pop-hide"]}
      >
        {success}
      </Toast>
      <Button
        className={styles["add-btn"]}
        onClick={() => (
          toggleModal(), setCurrentModal("add-post"), clearInputs()
        )}
      >
        Add new post {ICONS.add}
      </Button>
      <PostModals
        addPost={addPost}
        editPost={editPost}
        title={title}
        message={message}
        setTitle={setTitle}
        setMessage={setMessage}
        setError={setError}
        current={currentModal}
        toggleModal={toggleModal}
        modal={modal}
        error={error}
      />
      <PostDelete
        deletePost={deletePost}
        current={currentModal}
        toggleModal={toggleModal}
        modal={modal}
      />
      <PostTable
        error={error}
        posts={posts}
        loading={loading}
        setTitle={setTitle}
        setMessage={setMessage}
        setId={setId}
        setCurrentModal={setCurrentModal}
        toggleModal={toggleModal}
        startIndex={startIndex}
      />
      <PostPageNav
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Home;
