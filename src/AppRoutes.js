import { Routes, Route } from "react-router-dom";
import FeedsPage from "./pages/Feeds/FeedsPage";
import PostPage from "./pages/Post/PostPage";
import CreateNewPage from "./pages/CreateNew/CreateNewPage";
import AboutPage from "./pages/About/AboutPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FeedsPage />} />
      <Route path="/post/:postId" element={<PostPage />} />
      <Route path="/createNew" element={<CreateNewPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<h1>404 Not Found!</h1>} />
    </Routes>
  );
};

export default AppRoutes;
