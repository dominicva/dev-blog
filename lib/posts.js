import fs from 'fs';
import path from 'path';
import process from 'process';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    // remove .md extension so id is the file name
    const id = fileName.replace(/\.md$/, '');

    // read md file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // use gray-matter to parse the markddown
    // destructure drilling to grab all we need: title, date
    const {
      data: { title, date },
    } = matter(fileContents);

    // combine data and id
    return {
      id,
      title,
      date,
    };
  });

  // sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
