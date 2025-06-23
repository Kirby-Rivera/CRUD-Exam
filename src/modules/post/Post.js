import styles from "./Post.module.scss";
import useHandlePage from "./hooks/useHandlePage";
import usePostRender from "./hooks/usePostRender";
import useHandlePosts from "./hooks/useHandlePosts";
import usePostsInputs from "./hooks/usePostsInputs";
import useHandleModal from "./hooks/useHandleModal";
import Utilities from "helpers/Utilities";
import PostTable from "./PostTable";
import PostModals from "./PostModals";
import PostDelete from "./PostDelete";
import { Button, Toast } from "reactstrap";
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
    currentModal,
    modal,
    delModal,
    setCurrentModal,
    setModal,
    setDelModal,
  } = useHandleModal();

  const { clearInputs, success, setSuccess } = Utilities(
    setTitle,
    setMessage,
    setError,
    setModal,
    setDelModal
  );

  const { addPost, deletePost, editPost } = useHandlePosts(
    setRender,
    setError,
    title,
    message,
    id,
    setId,
    clearInputs,
    setSuccess
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
        onClick={() => {
          setModal(!modal);
          setCurrentModal("add-post");
          setTitle("");
          setMessage("");
        }}
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
        setModal={setModal}
        modal={modal}
        error={error}
      />
      <PostDelete
        deletePost={deletePost}
        current={currentModal}
        setDelModal={setDelModal}
        delModal={delModal}
      />
      <PostTable
        error={error}
        posts={posts}
        loading={loading}
        setTitle={setTitle}
        setMessage={setMessage}
        setId={setId}
        setCurrentModal={setCurrentModal}
        setModal={setModal}
        setDelModal={setDelModal}
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
