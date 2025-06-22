import styles from "./Post.module.scss";
import useHandlePage from "./hooks/useHandlePage";
import usePostRender from "./hooks/usePostRender";
import useHandlePosts from "./hooks/useHandlePosts";
import usePostsInputs from "./hooks/usePostsInputs";
import PostTable from "./PostTable";
import PostModals from "./PostModals";
import PostDelete from "./PostDelete";
import { Button, Toast, ToastHeader } from "reactstrap";
import { ICONS } from "assets/icons";
import PostPageNav from "./PostPageNav";

function Home() {
  const {
    loading,
    posts,
    meta,
    error,
    setRender,
    setError,
    setPosts,
    setMeta,
  } = usePostRender();

  const { title, message, id, setTitle, setMessage, setId } = usePostsInputs();

  const { currentPage, totalPages, handlePageChange, startIndex } =
    useHandlePage(meta, setPosts, setMeta);

  const {
    addPost,
    deletePost,
    editPost,
    clearInputs,
    toggleModal,
    setCurrentModal,
    currentModal,
    success,
    modal,
  } = useHandlePosts(
    setRender,
    setError,
    title,
    message,
    id,
    setMessage,
    setTitle,
    setId
  );

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
        setTitle={setTitle} //
        setMessage={setMessage} //
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
