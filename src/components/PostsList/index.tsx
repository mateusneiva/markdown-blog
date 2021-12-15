import { ListContainer } from "./styles";
import PostCard from "components/PostCard";

function PostsList({ posts }): JSX.Element {
  return (
    <ListContainer>
      {posts.map((post) => {
        return <PostCard key={post.metadata.slug} post={post} />;
      })}
    </ListContainer>
  );
}

export default PostsList;
