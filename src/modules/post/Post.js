import styles from "./Post.module.scss";
import useHome from "./usePost";
import PostTable from "./PostTable";
import PostModals from "./PostModals";
import { Button } from "reactstrap";
import { ICONS } from "assets/icons";
import PageNav from "./PageNav";

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
    setCurrentModal,
    clearInputs,
    modal,
    meta,
    currentPage,
    totalPages,
    handlePageChange,
  } = useHome();

  return (
    <div className={styles["home"]}>
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
        deletePost={deletePost}
      />
      <PostTable
        posts={posts}
        loading={loading}
        setTitle={setTitle}
        setMessage={setMessage}
        setId={setId}
        setCurrentModal={setCurrentModal}
        toggleModal={toggleModal}
      />
      <PageNav
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Home;
