import NextLink from "next/link";
import {
  PostContainer,
  Metadata,
  Content,
  Title,
  Info,
  Tag,
  Image,
} from "./styles";
import { BsFillCalendarDateFill, BsBookFill } from "react-icons/bs";
import Navbar from "components/Navbar";

function PostContent({ post }): JSX.Element {
  return (
    <PostContainer>
      <Navbar />
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
            <NextLink key="" href={`/tags/${post.metadata.tag}`} passHref>
              <Tag color={post.metadata.tagColor}>{post.metadata.tag}</Tag>
            </NextLink>
          </div>
        </Info>
      </Metadata>
      <Content
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </PostContainer>
  );
}

export default PostContent;
