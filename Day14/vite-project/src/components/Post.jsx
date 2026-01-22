import React from "react";
import useFetch from "../hooks/useFetch";

function Post() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (loading) return <p>Loading der...</p>;
  if (error) return <p>Error nih der : {error}</p>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}

export default Post;
