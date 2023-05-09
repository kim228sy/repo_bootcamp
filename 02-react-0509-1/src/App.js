import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // react-router-dom 구성 요소 임포트, Switch 대신 Routes를 임포트합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
// import Example from "./Example";

function App() {
  return (
    // <Router>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" exact={true} element={<Home />}></Route>
            <Route path="/create" exact={true} element={<Create />}></Route>
            <Route
              path="/blogs/:id"
              exact={true}
              element={<BlogDetails />}
            ></Route>
            <Route path="/*" exact={true} element={<NotFound />}></Route>
            {/* element prop을 사용합니다. */}
          </Routes>
        </div>
        {/* <Example /> */}
      </div>
    </BrowserRouter>
    // </Router>
  );
}
export default App;
