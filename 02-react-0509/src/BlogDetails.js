// BlogDetails 컴포넌트. 이 컴포넌트는 선택한 블로그 게시물의 세부 정보를 표시하고, 삭제 버튼을 눌러 해당 게시물을 삭제할 수 있는 기능을 구현.

import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
// `useNavigate`와 `useParams` 훅을 import. 또한 `useFetch` 커스텀 훅을 import하여 데이터를 가져옴.

const BlogDetails = () => {
  const { id } = useParams();
  const {
    error,
    isPending,
    data: blog,
  } = useFetch("http://localhost:8000/blogs/" + id);
  // `useParams` 훅을 사용하여 현재 경로에서 파라미터 값을 추출. 이때 `id` 변수에 저장. `useFetch` 커스텀 훅을 사용하여 `id` 값을 사용하여 블로그 게시물 데이터를 가져옴. `data` 값은 `blog` 변수에 저장.

  const history = useNavigate();
  // `useNavigate` 훅을 사용하여 `history` 객체를 생성. 이 객체는 브라우저의 기록을 제어할 수 있도록 해줌.

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => history("/"));
  };
  //`handleClick` 함수는 삭제 버튼을 클릭하면 실행. 이 함수에서는 `fetch()` API를 사용하여 선택한 블로그 게시물을 삭제. 그리고 `then()` 메서드를 사용하여 `history` 객체를 사용하여 브라우저의 경로를 변경.

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

// 마지막으로, 선택한 블로그 게시물의 제목, 내용, 삭제 버튼을 렌더링. 이때 `blog` 값이 로딩 중이면 `Loading ...` 메시지를 표시하고, 에러가 발생하면 `error` 메시지를 표시. 만약 `blog` 값이 존재하면 선택한 블로그 게시물의 제목과 내용을 표시하고, 삭제 버튼을 렌더링.
