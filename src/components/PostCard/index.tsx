import React from "react";

import {
  Container,
  Image,
  ImageHoverZoom,
  Title,
  Metadata,
  Tag,
} from "./styles";
import { BsFillCalendarDateFill, BsBookFill } from "react-icons/bs";

export function PostCard({ post }): JSX.Element {
  return (
    <Container>
      <ImageHoverZoom href={`/post/${post.metadata.slug}`}>
        <Image src={post.metadata.image} />
      </ImageHoverZoom>

      <Title href={`/post/${post.metadata.slug}`}>{post.metadata.title}</Title>

      <Metadata>
        <div>
          <time>
            <BsFillCalendarDateFill />
            {post.metadata.date}
          </time>
          <p>
            <BsBookFill />
            {post.metadata.timetoread}
          </p>
        </div>

        <Tag href={`/post/${post.metadata.tag}`} color={post.metadata.tagColor}>
          {post.metadata.tag}
        </Tag>
      </Metadata>
    </Container>
  );
}
