// BlogList 컴포넌트. 이 컴포넌트는 Home 컴포넌트에서 블로그 게시물 목록을 렌더링하는 데 사용.

// Link 컴포넌트를 import. 이 컴포넌트는 React Router에서 제공하는 컴포넌트로, 클릭 시 다른 경로로 이동할 수 있도록 함.
import { Link } from "react-router-dom";

// BlogList 함수형 컴포넌트를 정의. 이 컴포넌트는 blogs와 title prop을 받아와서 렌더링.
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

// `blog-list` 클래스가 할당된 div 요소에 블로그 게시물 목록을 렌더링. `title` prop을 사용하여 제목을 표시하고, `blogs` 배열에서 각 블로그 게시물을 나열.

// `blogs.map((blog) => ...)` : `blogs` 배열에서 각 블로그 게시물을 순회하면서 JSX를 반환.

// `<div className="blog-preview" key={blog.id}>` : 블로그 게시물을 렌더링할 div 요소를 생성. `blog.id` 값을 `key` prop으로 전달. `key` prop은 React에서 각 컴포넌트를 고유하게 식별하는 데 사용.

// `<Link to={`/blogs/${blog.id}`}> ... </Link>` : `Link` 컴포넌트를 사용하여 블로그 게시물을 클릭할 때 다른 경로(`/blogs/:id`)로 이동할 수 있도록 함. `to` prop으로 경로를 전달. 이때 `blog.id` 값이 동적으로 전달되어 경로가 "/blogs/:id" 형태로 동적으로 생성.

// `<h2>{blog.title}</h2>` : 블로그 게시물의 제목을 표시.

// `<p>{blog.body}</p>` : 블로그 게시물의 본문 내용을 표시.

// `<p>작성자 by {blog.author}</p>` : 블로그 게시물 작성자 정보를 표시.

// 마지막으로, `export default BlogList;`를 사용하여 `BlogList` 컴포넌트를 내보냄. 이를 통해 `BlogList` 컴포넌트는 다른 파일에서 import하여 사용할 수 있게 됨.
