import { GraphQLClient } from "../api/graphql";
import Home from "../index";

function TagList({ posts }): JSX.Element {
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

export default TagList;
