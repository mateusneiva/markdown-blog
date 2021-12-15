import Head from "next/head";
import { GraphQLClient } from "./api/graphql";
import Navbar from "components/Navbar";
import PostsList from "components/PostsList";

function Home({ posts }): JSX.Element {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar />
      <PostsList posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const query = `
    query {
      Posts(tag: "all") {
        metadata {
          title
          date
          image
          tag
          tagColor
          slug
          timetoread
        }
      }
    }
  `;

  const { data } = await GraphQLClient.executeOperation({ query });

  return {
    props: {
      posts: data.Posts,
    },
  };
}

export default Home;
