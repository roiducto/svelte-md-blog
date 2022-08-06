import fs from 'fs';

export const GET = async () => {
  let posts = fs.readdirSync(`src/posts`)
  .map(fileName => fileName.slice(0, -3))
  
  let body = JSON.stringify(posts);

  return {
    body
  }
}