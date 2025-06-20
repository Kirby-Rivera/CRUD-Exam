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
    startIndex
  } = props;

  if (loading)
    return (
      <div className={styles["spinner-container"]}>
        {error ? <p>Error loading data</p> : <Spinner color="dark" />}
      </div>
    );

    console.log(startIndex)

  return (
    <>
      <Table responsive className={styles["table"] + " mt-3"}>
        <thead>
          <tr className={styles["table-header-row"]}>
            <th>Post Id</th>
            <th>Title</th>
            <th>Message</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 ? (
            <tr scope="row" className={styles["no-post"]}>
              <td colSpan={4}>No Post</td>
            </tr>
          ) : (
            posts?.map((post, index) => (
              <PostTableRow
                key={post.postId}
                setTitle={setTitle}
                setMessage={setMessage}
                setId={setId}
                toggleModal={toggleModal}
                setCurrentModal={setCurrentModal}
                index={startIndex + index + 1}
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
