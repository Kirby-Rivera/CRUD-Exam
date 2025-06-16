import HomePost from "./HomePost";
import styles from "./Home.module.scss";

function HomePostSection(props) {
  const { posts, loading, error, deletePost } = props;

  if (loading) return <p>Loading... </p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className={styles["home-post-section"]}>
      {posts.length === 0 ? (
        <p>No post</p>
      ) : (
        posts?.map((post) => <HomePost deletePost={() => deletePost(post.postId)} key={post.postId} {...post} />)
      )}
    </div>  
  );
}

export default HomePostSection;
