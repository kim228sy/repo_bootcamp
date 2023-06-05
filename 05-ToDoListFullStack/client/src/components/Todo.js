import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSurgicalKnife, faTrash } from "@fortawesome/free-solid-svg-icons";
import { styles } from "../styles/components/Todo.styles";

const ToDo = (props) => {
  const handleDelete = () => {
    props.handleDelete(props.index);
  };

  const handleEdit = () => {
    props.handleEdit(props.index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>
        {props.todo.title} - {props.todo.author}
      </div>
      <div style={styles.content}>{props.todo.content}</div>
      <div style={styles.footer}>
        <button onClick={handleEdit} style={styles.update}>
          <FontAwesomeIcon icon={faSurgicalKnife} />
        </button>
        <button onClick={handleDelete} style={styles.trash}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default ToDo;
