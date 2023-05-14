import React, { useState, useEffect } from "react";
import { TodoListBlock } from "../styles/components/TodoList.styles";
import TodoItem from "./TodoItem";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    axios
      .get("http://localhost:3000/todos") // 데이터베이스로부터 Todo 리스트를 가져옴
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchTodos(); // Todo 데이터를 불러오는 함수 호출
  }, []);

  const handleTodoUpdate = (id, updatedTodo) => {
    // TodoItem에서 할 일 상태가 변경되었을 때 호출되는 함수
    axios
      .put(`http://localhost:3000/todos/${id}`, updatedTodo)
      .then((response) => {
        console.log(response.data);
        fetchTodos(); // 변경된 Todo 리스트를 다시 불러옴
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleTodoDelete = (id) => {
    // TodoItem에서 할 일 삭제 버튼이 클릭되었을 때 호출되는 함수
    axios
      .delete(`http://localhost:3000/todos/${id}`)
      .then((response) => {
        console.log(response.data);
        fetchTodos(); // 변경된 Todo 리스트를 다시 불러옴
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFetchTodos = () => {
    fetchTodos(); // Todo 데이터를 다시 불러오는 함수 호출
  };

  return (
    <TodoListBlock>
      {todos.map((todo, i) => (
        <TodoItem
          key={i}
          id={todo.id}
          // done={todo.done}
          // text={todo.text}
          onUpdate={handleTodoUpdate}
          onDelete={handleTodoDelete}
          fetchTodos={handleFetchTodos} // fetchTodos 함수를 TodoItem 컴포넌트로 전달
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
