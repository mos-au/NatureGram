import React from "react";
import styles from "./Post.module.css";
import { Link } from "react-router-dom";
import Like from "../Like/Like";

const Post = ({ post, fullPage }) => {
  const {
    id,
    title,
    profileImage,
    imageUrl,
    description,
    profileName,
    likes,
    isLiked,
  } = post;

  return (
    <div className={`${styles.post} ${fullPage ? styles.larger : ""}`}>
      <LinkToPage>
        <div className={styles["post-header"]}>
          <img src={profileImage} alt={profileName} />
          <div className={styles["profile-name"]}>{profileName}</div>
        </div>

        <img
          className={styles["post-image"]}
          src={
            !post.imageUrl.startsWith("https")
              ? URL.createObjectURL(post.image)
              : imageUrl
          }
          alt={title}
        />
      </LinkToPage>
      <div className={styles["post-title"]}>
        <LinkToPage>
          <div className={styles.title}>{title}</div>
        </LinkToPage>
        <Like likes={likes} isLiked={isLiked} />
      </div>

      <LinkToPage>
        <div
          className={`${styles["post-description"]} ${
            fullPage ? styles.showAll : ""
          }`}
        >
          {description}
        </div>
      </LinkToPage>
    </div>
  );

  function LinkToPage({ children }) {
    if (fullPage) return children;
    return <Link to={"/post/" + id}>{children}</Link>;
  }
};

export default Post;
