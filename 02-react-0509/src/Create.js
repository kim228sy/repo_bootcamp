// Create 컴포넌트. 이 컴포넌트는 새 블로그 게시물을 생성하는 폼을 제공하고, 데이터를 서버에 전송하여 새 게시물을 추가.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
// `useState`와 `useNavigate` 모듈을 import.

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setPending] = useState(false);
  const history = useNavigate();
  // `useState` 훅을 사용하여 `title`, `body`, `author`, `isPending` 값을 설정. `title`, `body`, `author`는 각각 블로그 게시물의 제목, 내용, 작성자를 저장하는 변수. `isPending`는 데이터가 서버로 전송되는 중인지 여부를 저장하는 변수. `useNavigate` 훅을 사용하여 `history` 객체를 생성.

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Added new blog");
      setPending(false);
      history("/");
    });
  };

  // `handleSubmit` 함수는 폼을 제출할 때 실행. 이 함수에서는 `fetch()` API를 사용하여 새 블로그 게시물 데이터를 서버로 전송. 그리고 `then()` 메서드를 사용하여 `history` 객체를 사용하여 브라우저의 경로를 변경.

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form action="" onSubmit={handleSubmit}>
        <label> Blog Title: </label>
        <div>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <label> Blog body: </label>
        <div>
          <textarea
            required
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>
        <label> Blog author: </label>
        <div>
          <select
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          >
            <option value="">선택하세요</option>
            <option value="Kim">Kim</option>
            <option value="Lee">Lee</option>
            <option value="Park">Park</option>
          </select>
        </div>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Add Blog</button>}
      </form>
    </div>
  );
};

export default Create;

// - 블로그 생성 폼을 감싸는 div 요소에 create 클래스를 추가.

// - h2 요소에 "Add a new Blog" 텍스트를 출력.

// - 블로그 생성 폼을 만드는 form 요소. onSubmit 이벤트를 설정하여 폼 제출 시 handleSubmit 함수가 실행.

// - 블로그 제목 입력 필드의 라벨을 출력.

// - 블로그 제목 입력 필드. `value` 속성에는 `title` 변수의 값이 설정. `onChange` 이벤트가 발생하면 입력된 값으로 `title` 변수를 업데이트.

// - 블로그 내용 입력 필드의 라벨을 출력.

// - 블로그 내용 입력 필드. `value` 속성에는 `body` 변수의 값이 설정. `onChange` 이벤트가 발생하면 입력된 값으로 `body` 변수를 업데이트.

// - 블로그 작성자 입력 필드의 라벨을 출력.

// - 블로그 작성자 입력 필드. `value` 속성에는 `author` 변수의 값이 설정. `onChange` 이벤트가 발생하면 선택된 값으로 `author` 변수를 업데이트. `select` 요소의 `option` 요소는 선택 가능한 작성자 옵션을 나타냄.

// - `isPending` 값에 따라 버튼을 활성화하거나 비활성화. 데이터가 전송 중인 동안에는 버튼을 비활성화시켜 사용자가 버튼을 클릭할 수 없도록 함.
