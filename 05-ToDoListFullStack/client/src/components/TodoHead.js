import React, { useState, useEffect } from "react";
import { TodoHeadBlock } from "../styles/components/TodoHead.styles";
import axios from "axios";

function TodoHead() {
  const currentDate = new Date(); // 현재 날짜와 시간을 가져옵니다.
  const year = currentDate.getFullYear(); // 현재 연도를 가져옵니다.
  const month = currentDate.getMonth() + 1; // 현재 월을 가져옵니다. (0부터 시작하므로 1을 더해줍니다)
  const date = currentDate.getDate(); // 현재 일을 가져옵니다.
  const day = getDayString(currentDate.getDay()); // 현재 요일을 가져옵니다.

  const [tasksCount, setTasksCount] = useState(0); // 할 일의 개수를 상태로 관리합니다.

  useEffect(() => {
    // 데이터베이스에서 할 일 데이터를 가져오는 API 호출
    axios
      .get("http://localhost:3000/todos")
      .then((response) => {
        const todos = response.data;
        const incompleteTodos = todos.filter((todo) => !todo.done);
        setTasksCount(incompleteTodos.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // 마운트될 때만 실행되도록 빈 배열을 두 번째 인자로 전달합니다.

  return (
    <TodoHeadBlock>
      <h1>{`${year}년 ${month}월 ${date}일`}</h1>
      <div className="day">{day}</div>
      <div className="tasks-left">{`할 일 ${tasksCount}개 남음`}</div>
    </TodoHeadBlock>
  );
}

function getDayString(dayNumber) {
  const days = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  return days[dayNumber];
}

export default TodoHead;
