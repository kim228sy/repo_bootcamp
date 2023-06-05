import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(1);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodos([
            ...todos,
            {
              todoId: todoId,
              todoText: e.target.todoText.value,
            },
          ]);
          setTodoId(todoId + 1);
        }}
      >
        <input type="text" placeholder="할 일 작성하쟈" name="todoText" />
        <button type="submit"></button>
      </form>
      <ul>
        {todos.map((todo, idx) => {
          return (
            <li key={idx}>
              {todo}
              <span
                onClick={() => {
                  setTodos();
                  todos.filter((item) => {
                    return item.todoId !== todo.todoId;
                  });
                }}
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
