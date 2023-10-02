import { PostCard } from "components/PostCard";
import { Container, Posts } from "./styles";

export function PostsList({ posts }) {
  return (
    <Container>
      <Posts>
        {posts.map((post) => {
          return <PostCard key={post.metadata.slug} post={post} />;
        })}
      </Posts>
    </Container>
  );
}
