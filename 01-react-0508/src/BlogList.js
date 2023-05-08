const BlogList = ({ propsBlogs, title, onRemove }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {/* {propsBlogs.map((e) => ( */}
      {propsBlogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {/* <h2>{e.title}</h2>
          <p>{e.body}</p>
          <p>{e.author}</p>
          <button onClick={onRemove(e.id)}>삭제</button> */}
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>{blog.author}</p>
          <button onClick={() => onRemove(blog.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
