import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    error,
    isPending,
    data: blog,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => history("/"));
  };

  return (
    <div className="blog-details">
      <h2>Blog-Details - {id} </h2>
      {isPending && <div>Loading ... </div>}
      {error && <div>error</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <div>{blog.body}</div>
          <button onClick={handleClick}>삭제</button>
        </article>
      )}
    </div>
  );
};
export default BlogDetails;
