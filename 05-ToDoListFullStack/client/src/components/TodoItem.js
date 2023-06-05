import React from "react";
import {
  Remove,
  TodoItemBlock,
  CheckCircle,
  Text,
} from "../styles/components/TodoItem.styles";
import { MdDone, MdDelete } from "react-icons/md";
import axios from "axios";

// function TodoItem({ id, done, text, onUpdate, onDelete, fetchTodos }) {
function TodoItem({ id, onUpdate, onDelete, fetchTodos }) {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/todos/${id}`) // 데이터베이스에서 해당 Todo 삭제
      .then((response) => {
        console.log(response.data);
        // 할 일이 성공적으로 삭제된 후 수행할 작업 처리
        onDelete(id);
        fetchTodos(); // 변경된 Todo 리스트를 다시 불러옴
      })
      .catch((error) => {
        console.error(error);
        // 오류 처리를 위한 작업 처리
      });
  };

  const handleToggle = () => {
    // const updatedTodo = {
    //   done: !done,
    // };
    axios
      // .put(`http://localhost:3000/todos/${id}`, updatedTodo) // 데이터베이스의 해당 Todo 업데이트
      .put(`http://localhost:3000/todos/${id}`) // 데이터베이스의 해당 Todo 업데이트
      .then((response) => {
        console.log(response.data);
        // onUpdate(id, updatedTodo); // 할 일이 성공적으로 업데이트된 후 수행할 작업 처리
        onUpdate(id); // 할 일이 성공적으로 업데이트된 후 수행할 작업 처리
      })
      .catch((error) => {
        console.error(error);
        // 오류 처리를 위한 작업 처리
      });
  };

  return (
    <TodoItemBlock>
      {/* <CheckCircle done={done} onClick={handleToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text> */}
      <CheckCircle onClick={handleToggle}>
        <MdDone />
      </CheckCircle>
      <Text></Text>
      <Remove onClick={handleDelete}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
