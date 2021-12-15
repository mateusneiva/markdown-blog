import NextLink from "next/link";
import {
  CardContainer,
  Image,
  ImageHoverZoom,
  Title,
  Metadata,
  Tag,
} from "./styles";
import { BsFillCalendarDateFill, BsBookFill } from "react-icons/bs";

function PostCard({ post }): JSX.Element {
  return (
    <CardContainer>
      <NextLink href={`/blog/${post.metadata.slug}`} passHref>
        <ImageHoverZoom>
          <Image src={post.metadata.image} />
        </ImageHoverZoom>
      </NextLink>
      <NextLink href={`/blog/${post.metadata.slug}`} passHref>
        <Title>{post.metadata.title}</Title>
      </NextLink>
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
        <NextLink key="" href={`/tags/${post.metadata.tag}`} passHref>
          <Tag color={post.metadata.tagColor}>{post.metadata.tag}</Tag>
        </NextLink>
      </Metadata>
    </CardContainer>
  );
}

export default PostCard;
