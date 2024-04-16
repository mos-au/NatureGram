import React, { useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    getPost();
  }, [postId]);

  const getPost = async () => {
    const postIdParam = postId ?? "";
    const response = await fetch(
      `https://json-server-vercel-rust-nine.vercel.app/api/posts/${postIdParam}`
    );
    const post = await response.json();

    if (!post.imageUrl.startsWith("https")) {
      const res = await fetch(
        `https://json-server-vercel-rust-nine.vercel.app/api/files/${post.imageUrl}`
      );
      const data = await res.blob();
      post.image = data;
    }

    setPost(post);
  };

  if (!post) {
    return <div>Loading....</div>;
  }

  return (
    <div className="container">
      <Post post={post} fullPage={true} />
    </div>
  );
};

export default PostPage;
