import React from "react";
import Head from "next/head";

import { GraphQLClient } from "api/graphql";
import { Header } from "components/Header";
import { PostsList } from "components/PostsList";

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
  const id = context.query ? context.query.id : "all";

  const query = `
    query {
      Posts(tag: "${id}") {
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
