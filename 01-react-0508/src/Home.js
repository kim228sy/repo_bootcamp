import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "1번이다", body: "일번내용이다", author: "kim", id: "1" },
    { title: "2번이다", body: "이번내용이다", author: "lee", id: "2" },
    { title: "3번이다", body: "삼번내용이다", author: "park", id: "3" },
  ]);

  const handleDelete = (id) => {
    // const newBlogs = blogs.filter((e) => e.id !== id);
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div>
      <BlogList propsBlogs={blogs} title="All blogs" onRemove={handleDelete} />
    </div>
  );
};
export default Home;
