import styles from "./Post.module.scss";
import useHome from "./usePost";
import PostTable from "./PostTable";
import PostModals from "./PostModals";
import { Button, Card } from "reactstrap";
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
    startIndex
  } = useHome();

  return (
    <div className={styles["home"]}>
      <Card
        className={success ? styles["success-pop"] : styles["success-pop-hide"]}
      >
        {success}
      </Card>
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
        error={error}
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
      <PageNav
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Home;
