import React, { useState } from "react";
import {
  CircleButton,
  InsertFormPositioner,
  InsertForm,
  Input,
} from "../styles/components/TodoCreate.styles";
import { MdAdd } from "react-icons/md";
import axios from "axios";
function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState(1); // 기본 우선순위를 1로 설정합니다.
  const [author, setAuthor] = useState(""); // 작성자 입력 상태를 추가합니다.

  const onToggle = () => setOpen(!open);

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에서 서버 API 호출을 추가.

    const data = { author, title, content, priority };

    axios
      .post("http://localhost:3000/create", data)
      .then((response) => {
        console.log(response.data);
        // 할 일이 성공적으로 추가된 후 수행할 작업을 처리.
      })
      .catch((error) => {
        console.error(error);
        // 오류 처리를 위한 작업을 수행.
      });

    setTitle("");
    setContent("");
    setPriority(1); // 우선순위를 기본값으로 재설정합니다.
    setAuthor(""); // 작성자 입력 상태를 초기화합니다.
    setOpen(false);
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={handleSubmit}>
            <Input
              autoFocus
              placeholder="할 일의 제목을 입력하세요"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <Input
              placeholder="할 일의 상세 내용을 입력하세요"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
            <Input
              placeholder="작성자를 입력하세요"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
            <select
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
            >
              <option value={1}>낮은 우선순위</option>
              <option value={2}>중간 우선순위</option>
              <option value={3}>높은 우선순위</option>
            </select>
            <button type="submit">할 일 추가</button>
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
