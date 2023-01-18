import React from "react";

import Home from "pages/index";
import { GraphQLClient } from "api/graphql";

export default function TagList({ posts }): JSX.Element {
  return <Home posts={posts} />;
}

export async function getServerSideProps(context) {
  const { id } = context.query;

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
