import { Container, Title, Time, Description } from "./styles";

export function PostCard({ post }) {
  return (
    <Container>
      <Title href={`/post/${post.metadata.slug}`}>{post.metadata.title}</Title>

      <Description>{post.metadata.description}</Description>

      <Time>
        <p>{post.metadata.date}</p>•<p>{post.metadata.timetoread}</p>
      </Time>
    </Container>
  );
}
