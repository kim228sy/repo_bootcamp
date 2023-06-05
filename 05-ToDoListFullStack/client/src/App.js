import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <BrowserRouter>
          <Routes>
            {/* <Route exact path="/todos" component={TodoList} />
            <Route exact path="/create" component={TodoCreate} /> */}
            <Route path="/todos" element={<TodoList />} />
            <Route path="/create" element={<TodoCreate />} />
          </Routes>
        </BrowserRouter>
      </TodoTemplate>
    </>
  );
}

export default App;
