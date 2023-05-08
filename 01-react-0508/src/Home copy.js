import { useState } from "react";
import BlogList from "./BlogList";

// const Home = () => {
//   let name = "홍길동";
//   const handleClick = () => {
//     console.log("Before: ", name);
//     name = "김길동";
//     console.log("After: ", name);
//   }; // 렌더링의 문제가 발생.

//   // const handleClick2 = (name) => {
//   //   console.log("Hello " + name);
//   // };

//   // const handleClick2 = (name, e) => {
//   //   console.log("Hello " + name);
//   // };

//   return (
//     <div className="home">
//       <h2>Home </h2>
//       <p>{name}</p>
//       <button onClick={handleClick}>Click</button>
//       {/* <button
//         onClick={(e) => {
//           handleClick2("kimsy", e);
//         }}
//       >
//         Click Hello
//       </button> */}
//     </div>
//   );
// };

// const Home = () => {
//   const [name, setName] = useState("홍 길동");
//   const [age, setAge] = useState(20);
//   const handleClick = () => {
//     console.log(age, name);
//     setName("김 길동");
//     setAge(25);
//   };

//   return (
//     <div className="home">
//       <h2>Home </h2>
//       <p>{name}</p>
//       <p>만 {age} 세</p>
//       <button onClick={handleClick}>클릭</button>
//     </div>
//   );
// };

const Home = () => {
  const [blogs, setBlog] = useState([
    { title: "my article 1", body: "1 lorem ipsum...", author: "Hong", id: 1 },
    { title: "my article 2", body: "2 lorem ipsum...", author: "Kim", id: 2 },
    { title: "my article 3", body: "3 lorem ipsum...", author: "Lee", id: 3 },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Kim")}
        title="Kim's Blogs"
      />
      {/* <BlogList blogs={blogs.blog.author ==='Lee'} title="Nobody's blogs"/> */}
    </div>
  );
};
export default Home;
