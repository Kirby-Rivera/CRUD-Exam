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
    setModal,
    setDelModal,
    startIndex,
  } = props;

  if (loading)
    return (
      <div className={styles["spinner-container"]}>
        {error ? <p>Error loading data</p> : <Spinner color="dark" />}
      </div>
    );

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
              <td colSpan={5}>No Post</td>
            </tr>
          ) : (
            posts?.map((post, index) => (
              <PostTableRow
                key={post.postId}
                setTitle={setTitle}
                setMessage={setMessage}
                setId={setId}
                setModal={setModal}
                setDelModal={setDelModal}
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
