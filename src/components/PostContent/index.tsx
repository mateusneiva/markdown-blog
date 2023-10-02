import { Header } from "components/Header";
import {
  Container,
  Metadata,
  Content,
  Title,
  Description,
  Time,
} from "./styles";

export function PostContent({ post }) {
  return (
    <Container>
      <Header />
      <Metadata>
        <Title>{post.metadata.title}</Title>

        <Description>{post.metadata.description}</Description>

        <Time>
          <time>{post.metadata.date}</time>•<p>{post.metadata.timetoread}</p>
        </Time>
      </Metadata>

      <Content
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </Container>
  );
}
