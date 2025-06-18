import PostTableRow from "./PostTableRow";
import styles from "./Post.module.scss";
import { Table, Spinner } from "reactstrap";

function HomePostSection(props) {
  const {
    posts,
    loading,
    error,
    setTitle,
    setMessage,
    setId,
    setCurrentModal,
    toggleModal,
  } = props;

  if (loading) return <Spinner color="dark" />;
  if (error) return <p>Error loading data</p>;

  return (
    <>
      <Table bordered responsive className={styles["table"] + " mt-3"}>
        <thead>
          <tr className={styles["table-header-row"]}>
            <th>Title</th>
            <th>Message</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 ? (
            <p>No post</p>
          ) : (
            posts?.map((post) => (
              <PostTableRow
                key={post.postId}
                setTitle={setTitle}
                setMessage={setMessage}
                setId={setId}
                toggleModal={toggleModal}
                setCurrentModal={setCurrentModal}
                {...post}
              />
            ))
          )}
        </tbody>
      </Table>
    </>
  );
}

export default HomePostSection;
