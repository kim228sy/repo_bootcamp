// const BlogList = ({ propsBlogs, title, onRemove }) => {
//   return (
//     <div className="blog-list">
//       <h2>{title}</h2>
//       {/* {propsBlogs.map((e) => ( */}
//       {propsBlogs.map((blog) => (
//         <div className="blog-preview">
//           <h2>{blog.title}</h2>
//           <p>{blog.body}</p>
//           <p>{blog.author}</p>
//           <button onClick={() => onRemove(blog.id)}>삭제</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogList;

import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2> {title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <p>작성자 by {blog.author}</p>
          </Link>
          {/* <button onClick={ ()=>{ handleRemove(blog.id)}}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
