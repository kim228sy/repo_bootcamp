const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const PORT = process.env.port || 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  user: "root",
  host: "127.0.0.1", // localhost
  password: "122413",
  database: "todolist_sys",
});

// Building a API

// Create
app.post("/create", (req, res) => {
  // const author = req.body.author;
  // const title = req.body.title;
  // const content = req.body.content;
  // const priority = req.body.priority;
  const { author, title, content, priority } = req.body;

  db.query(
    "INSERT INTO TODOLIST_SYS.TODOS (AUTHOR,TITLE,CONTENT,PRIORITY) VALUES (?,?,?,?)",
    [author, title, content, priority],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Failed to insert values into the database");
      } else {
        res.send("Inserted values successfully!");
      }
    }
  );
});

// // Read1
// app.get("/todos", (req, res) => {
//   db.query("SELECT * FROM TODOLISTSYSTEM.TODOS", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(`Selected values successfully!`);
//     }
//   });
// });

// Read2 (Get All Todos)
app.get("/todos", (req, res) => {
  db.query("SELECT * FROM TODOLIST_SYS.TODOS", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Failed to fetch todos from the database");
    } else {
      res.send(result); // 검색된 todos를 응답으로 보냄.
    }
  });
});

// // Update1
// app.put("/todos", (req, res) => {
//   const todoid = req.body.todoid;
//   const author = req.body.author;
//   const title = req.body.title;
//   const content = req.body.content;
//   const priority = req.body.priority;

//   db.query(
//     "UPDATE TODOLISTSYSTEM.TODOS SET AUTHOR = ?, TITLE = ?, CONTENT = ?, PRIORITY = ? WHERE TODOID = ?;",
//     [author, title, content, priority, todoid],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(`Updated values successfully!`);
//       }
//     }
//   );
// });

// Update2
app.put("/todos/:todoid", (req, res) => {
  const todoid = req.params.todoid;
  // const author = req.body.author;
  // const title = req.body.title;
  // const content = req.body.content;
  // const priority = req.body.priority;

  // const { author, title, content, priority } = req.body;
  const { done } = req.body;

  db.query(
    "UPDATE TODOLIST_SYS.TODOS SET AUTHOR = ?, TITLE = ?, CONTENT = ?, PRIORITY = ? WHERE TODOID = ?",
    // [author, title, content, priority, todoid],
    [done, todoid],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Failed to update todo in the database");
      } else {
        res.send(`Updated values successfully!`);
      }
    }
  );
});

// // Delete1
// app.delete("/todos/:todoid", (req, res) => {
//   const { todoid } = req.params;
//   db.query(
//     "DELETE FROM TODOLISTSYSTEM.TODOS WHERE TODOID = ?",
//     [todoid],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(`Deleted values successfully!`);
//       }
//     }
//   );
// });

// Delete2
app.delete("/todos/:todoid", (req, res) => {
  // const { todoid } = req.params;
  const todoid = req.params.todoid;

  db.query(
    "DELETE FROM TODOLIST_SYS.TODOS WHERE TODOID = ?",
    [todoid],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Failed to delete todo from the database");
      } else {
        res.send(`Deleted values successfully!`);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
