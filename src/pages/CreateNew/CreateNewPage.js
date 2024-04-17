import { useState } from "react";
import styles from "./CreateNewPage.module.css";
import { useNavigate } from "react-router-dom";

const CreateNewPage = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [file, setFile] = useState();
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  // const handleCreateNew = async (e) => {
  //   e.preventDefault();
  //   if (!title || !description || !author) {
  //     setHasError(true);
  //     return;
  //   }
  //   setHasError(false);

  //   const formData = new FormData();
  //   formData.append("image", file);

  //   try {
  //     // const res = await fetch(
  //     //   "https://json-server-vercel-rust-nine.vercel.app/api/upload",
  //     //   {
  //     //     method: "POST",
  //     //     body: formData,
  //     //   }
  //     // );
  //     // const image = await res.json();

  //     const newPost = {
  //       profileName: author,
  //       title,
  //       description,
  //       profileImage: "https://avatars.githubusercontent.com/u/51633191",
  //       isLiked,
  //       likes: Math.floor(Math.random() * 9991),
  //     };

  //     await fetch("https://json-server-vercel-rust-nine.vercel.app/api/posts", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(newPost),
  //     });
  //     navigate("/");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const handleCreateNew = async (e) => {
    e.preventDefault();
    if (!title || !description || !author) {
      setHasError(true);
      return;
    }
    setHasError(false);
    const newPosts = JSON.parse(localStorage.getItem("newPosts")) ?? [];

    const newPost = {
      id: String(Math.floor(Math.random() * 9999)),
      profileName: author,
      title,
      description,
      profileImage: "https://avatars.githubusercontent.com/u/51633191",
      imageUrl: "https://loremflickr.com/640/480/nature?lock=2043061259468800",
      isLiked,
      likes: Math.floor(Math.random() * 99),
    };
    newPosts.push(newPost);

    localStorage.setItem("newPosts", JSON.stringify(newPosts));

    navigate("/");
  };

  return (
    <div className={styles.container}>
      {hasError && <div className={styles.error}>All fields are required</div>}
      <form>
        <label>
          Author
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        {/* <div>
          <label>
            Image
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
        </div> */}
        <label>
          Is Liked?
          <input
            type="checkbox"
            value={isLiked}
            onChange={(e) => setIsLiked(e.target.checked)}
          />
        </label>
        <div className={styles["button-wrapper"]}>
          <button onClick={handleCreateNew}>Create New</button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewPage;
