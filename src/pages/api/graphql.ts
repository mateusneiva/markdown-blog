import { ApolloServer, gql } from "apollo-server-micro";
import getAllPosts from "../../graphql/resolvers/getAllPosts";

export const config = {
  api: {
    bodyParser: false,
  },
};

const typeDefs = gql`
  type PostMetadata {
    title: String
    slug: String
    date: String
    image: String
    tag: String
    tagColor: String
    timetoread: String
    description: String
  }

  type Post {
    metadata: PostMetadata
    content: String
  }

  type Query {
    Posts(tag: String): [Post]
    Post(slug: String): Post
  }
`;

const resolvers = {
  Query: {
    Posts: (parent, args, context, info) => {
      const { tag } = args;
      if(tag == 'all'){
        return getAllPosts();
      }
      return getAllPosts().filter((post) => post.metadata.tag.toLowerCase() === tag.toLowerCase());
    },
    Post: (parent, args, context, info) => {
      const { slug } = args;
      return getAllPosts().filter((post) => post.metadata.slug === slug)[0];
    },
  },
};

export const GraphQLClient = new ApolloServer({ typeDefs, resolvers });
const startServer = GraphQLClient.start();

export default async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await GraphQLClient.createHandler({
    path: "/api/graphql",
  })(req, res);
};
