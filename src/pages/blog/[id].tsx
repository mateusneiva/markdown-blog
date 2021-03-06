import Head from "next/head";
import Error from "next/error";
import { GraphQLClient } from "../api/graphql";
import PostContent from "components/PostContent";

function Post({ post }): JSX.Element {
  if (!post) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {post && (
        <>
          <Head>
            <title>{post.metadata.title}</title>
          </Head>
          <PostContent post={post} />
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const query = `
    query {
      Post (slug: "${id}") {
        metadata {
          image
          title
          date
          tag
          tagColor
          timetoread
          slug
        },
        content
      }
    }
  `;

  const { data } = await GraphQLClient.executeOperation({ query });

  return {
    props: {
      post: data.Post,
    },
  };
}

export default Post;
