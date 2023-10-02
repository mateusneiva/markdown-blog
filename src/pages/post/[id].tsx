import Head from "next/head";
import Error from "next/error";

import { GraphQLClient } from "api/graphql";
import { PostContent } from "components/PostContent";
import { getAllPostIds } from "graphql/resolvers/getAllPostsId";

export default function Post({ post }): JSX.Element {
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

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const query = `
    query {
      Post (slug: "${id}") {
        metadata {
          title
          date
          description
          slug
          timetoread
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
