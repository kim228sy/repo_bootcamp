// React Router를 사용하여 다양한 경로에 대한 라우팅을 설정하는 애플리케이션의 진입점.

import "./App.css"; // CSS 피일 임포트.
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // react-router-dom 구성 요소 임포트, Switch 대신 Routes를 임포트.
import { BrowserRouter, Route, Routes } from "react-router-dom"; // 리액트 라우터 돔에서 브라우저라우터, 라우트, 라우츠 임포트.
// 같은 위치 다른 파일의 컴포넌트를 임포트.
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
// // import Example from "./Example";

// `App()` 함수는 JSX를 반환. `BrowserRouter` 컴포넌트를 래핑하고 있으며, `Navbar`와 `Routes` 컴포넌트를 포함.
function App() {
  return (
    // // <Router>
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
            {/* element prop을 사용. */}
          </Routes>
        </div>
        {/* <Example /> */}
      </div>
    </BrowserRouter>
    // // </Router>
  );
}
export default App;
// `BrowserRouter`는 React Router에서 브라우저에서 동작하는 라우터 컴포넌트. 이 컴포넌트를 사용하면 React 애플리케이션에서 클라이언트 측 라우팅을 구현.

// - `<div className="App">` : 최상위 div 요소에 `App` 클래스 이름이 할당되며, 이를 통해 CSS 스타일링이 가능.

// - `<Navbar />` : `Navbar` 컴포넌트가 렌더링. 이 컴포넌트의 애플리케이션의 상단에 나타날 네이게이션 바.

// - `<div className="content">` : 내부에 다른 컴포넌트가 렌더링될 컨테이너.

// - `<Routes>` : 경로별로 라우팅할 컴포넌트를 설정하는 컴포넌트. `exact={true}`를 사용하여 정확히 경로가 "/"인 경우에만 `Home` 컴포넌트가 렌더링되도록 설정.

// - `<Route path="/" exact={true} element={<Home />} />` : 경로가 "/"일 때, `Home` 컴포넌트가 렌더링. `exact={true}`를 사용하여 정확히 경로가 "/create"인 경우에만 `Create` 컴포넌트가 렌더링되도록 설정.

// - `<Route path="/create" exact={true} element={<Create />} />` : 경로가 "/create"일 때, `Create` 컴포넌트가 렌더링.

// - `<Route path="/blogs/:id" exact={true} element={<BlogDetails />} />` : 경로가 "/blogs/:id" 일 때, `BlogDetails` 컴포넌트가 렌더링. 이때 `:id`는 동적으로 변경되는 매개변수. "/blogs/123"과 같은 경로에서 ":id" 값이 "123"으로 변경. exact={true}를 사용하여 정확히 경로가 "/blogs/:id"인 경우에만 BlogDetails 컴포넌트가 렌더링되도록 설정.

// - `<Route path="/*" exact={true} element={<NotFound />} />` : 모든 경로가 해당되지 않을 경우, `NotFound` 컴포넌트가 렌더링. 404 오류 페이지를 구현하는 데 사용. `exact={true}`를 사용하여 정확히 경로가 "/*"인 경우에만 NotFound 컴포넌트가 렌더링되도록 설정

// `export default App;`을 통해 `App` 컴포넌트가 다른 파일에서도 import될 수 있게 됨. -> index.js
