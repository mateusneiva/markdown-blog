import React from "react";
import NextLink from "next/link";
import { BsFillCalendarDateFill, BsBookFill } from "react-icons/bs";

import {
  Container,
  Metadata,
  Content,
  Title,
  Info,
  Tag,
  Image,
} from "./styles";

import { Header } from "components/Header";

export function PostContent({ post }): JSX.Element {
  return (
    <Container>
      <Header />
      <Metadata>
        <Image src={post.metadata.image} />
        <Info>
          <Title>{post.metadata.title}</Title>
          <div>
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

            <Tag
              href={`/filter/${post.metadata.tag}`}
              color={post.metadata.tagColor}
            >
              {post.metadata.tag}
            </Tag>
          </div>
        </Info>
      </Metadata>
      <Content
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </Container>
  );
}
