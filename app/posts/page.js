import React from "react";
import axios from "axios";

async function getData() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return data;
}

export default async function Posts() {
  const posts = await getData();
  return (
    <>
      <h1>This the Posts Page</h1>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </>
  );
}
