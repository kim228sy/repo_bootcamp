import React from "react";
import {
  Remove,
  TodoItemBlock,
  CheckCircle,
  Text,
} from "../styles/components/TodoItem.styles";
import { MdDone, MdDelete } from "react-icons/md";

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
