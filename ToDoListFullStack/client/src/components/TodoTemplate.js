import React from "react";
import { TodoTemplateBlock } from "../styles/components/TodoTemplate.styles";

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
