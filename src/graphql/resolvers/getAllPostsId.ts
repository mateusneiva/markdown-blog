import fs from "fs";

export function getAllPostIds() {
  const fileNames = fs.readdirSync("./posts");

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
