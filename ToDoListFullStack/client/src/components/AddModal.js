import React, { useState, useEffect } from "react";
import { styles } from "../Styles/TodoStyles";

const AddModal = (props) => {
  const [todo, setTodo] = useState({
    author: "",
    title: "",
    content: "",
    priority: -1,
  });

  useEffect(() => {
    setTodo(props.todo);
  }, [props]);

  const handleInputChange = (key, value) => {
    setTodo((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const cleanup = () => {
    setTodo({
      author: "",
      title: "",
      content: "",
      priority: -1,
    });
  };

  return (
    <div>
      {props.isModalVisible && (
        <div style={styles.container}>
          <div style={styles.form}>
            <input
              value={todo.author}
              onChange={(event) => {
                handleInputChange("author", event.target.value);
              }}
              style={styles.input}
              placeholder="author"
            />
            <input
              value={todo.title}
              style={styles.input}
              placeholder="title"
              onChange={(event) => {
                handleInputChange("title", event.target.value);
              }}
            />
            <input
              value={todo.content}
              style={styles.input}
              placeholder="content"
              onChange={(event) => {
                handleInputChange("content", event.target.value);
              }}
            />
            <input
              value={todo.priority !== -1 ? String(todo.priority) : ""}
              style={styles.input}
              placeholder="priority"
              onChange={(event) => {
                handleInputChange(
                  "priority",
                  isNaN(Number(event.target.value))
                    ? -1
                    : Number(event.target.value)
                );
              }}
            />
            <div style={styles.closeContainer}>
              <button
                onClick={() => {
                  if (!props.isModalVisible) {
                    cleanup();
                  }
                  props.handleSubmit(todo);
                }}
                style={styles.button}
              >
                Submit
              </button>
              <button
                onClick={() => {
                  console.log(props.todo);
                  cleanup();
                  props.handleClose();
                }}
                style={styles.button}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddModal;
