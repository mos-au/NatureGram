import React, { useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [post, setPost] = useState(null);
  const [hasError, setHasError] = useState(false);
  const { postId } = useParams();

  useEffect(() => {
    getPost();
  }, [postId]);

  const getPost = async () => {
    const postIdParam = postId ?? "";

    let post;
    try {
      const response = await fetch(
        `https://json-server-vercel-rust-nine.vercel.app/api/posts/${postIdParam}`
      );
      const result = await response.json();
      if (!response.ok) {
        throw new Error("Has Error");
      }
      post = result;
      setHasError(false);
    } catch (e) {
      post = JSON.parse(localStorage.getItem("newPosts")).find(
        (post) => post.id === postIdParam
      );
    }
    setPost(post);
    // if (!post.imageUrl.startsWith("https")) {
    //   const res = await fetch(
    //     `https://json-server-vercel-rust-nine.vercel.app/api/files/${post.imageUrl}`
    //   );
    //   const data = await res.blob();
    //   post.image = data;
    // }
  };

  if (!post) {
    return <div>Loading....</div>;
  }

  if (!hasError) {
    return (
      <div className="container">
        <Post post={post} fullPage={true} />
      </div>
    );
  }
};

export default PostPage;
