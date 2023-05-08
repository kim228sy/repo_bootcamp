import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // react-router-dom 구성 요소 임포트, Switch 대신 Routes를 임포트합니다.
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* element prop을 사용합니다. */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
