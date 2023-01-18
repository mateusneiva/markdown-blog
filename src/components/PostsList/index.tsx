import React from "react";

import { Container } from "./styles";
import { PostCard } from "components/PostCard";

export function PostsList({ posts }): JSX.Element {
  return (
    <Container>
      {posts.map((post) => {
        return <PostCard key={post.metadata.slug} post={post} />;
      })}
    </Container>
  );
}
