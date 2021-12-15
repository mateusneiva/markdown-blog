import fs from "fs";
import grayMatter from "gray-matter";
import { remark } from "remark";
import remarkHTML from "remark-html";
import readingTime from "reading-time";

interface IPost {
  metadata: {
    title?: string;
    date?: string;
    image?: string;
    timetoread?: string;
    description?: string;
    slug?: string;
    tag?: string;
    tagColor?: string;
  };
  content: string;
}

function getAllPosts() {
  const postsFilenames = fs.readdirSync("./posts");

  const posts: IPost[] = postsFilenames.map((filename) => {
    const postContent = fs.readFileSync(`./posts/${filename}`, "utf-8");
    const { content, data: metadata } = grayMatter(postContent);

    const htmlContent = remark()
      .use(remarkHTML)
      .processSync(content)
      .toString();
      
    return {
      metadata: {
        ...metadata,
        timetoread: readingTime(content).text,
        slug: filename.replace(".md", ""),
      },
      content: htmlContent,
    };
  });

  posts.sort(function (a, b) {
    return (
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  });

  return posts;
}

export default getAllPosts;
