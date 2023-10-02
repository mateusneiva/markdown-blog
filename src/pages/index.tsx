import React from "react";
import Head from "next/head";

import { Header } from "components/Header";
import { PostsList } from "components/PostsList";
import { GraphQLClient } from "api/graphql";

export default function Home({ posts }): JSX.Element {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <PostsList posts={posts} />
    </>
  );
}

export async function getStaticProps(context) {
  const query = `
    query {
      Posts {
        metadata {
          title
          date
          description
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
