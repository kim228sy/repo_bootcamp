// Navbar 컴포넌트의 렌더링 부분.

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Blog!</h1>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Create</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

// `<nav className="navbar">` : navbar 클래스를 가진 nav 요소를 만듦.

// `<h1>My Blog!</h1>` : 블로그 이름을 출력하는 h1 요소.

// `<div className="links">` : 내비게이션 링크를 담을 div 요소.

// `<NavLink to="/">Home</NavLink>` : "Home" 페이지로 이동하는 내비게이션 링크. NavLink 컴포넌트를 사용하며, to 속성 값으로 경로를 설정.

// `<NavLink to="/create">Create</NavLink>` : "Create" 페이지로 이동하는 내비게이션 링크. NavLink 컴포넌트를 사용하며, to 속성 값으로 경로를 설정.

// NavLink 컴포넌트는 현재 페이지의 경로와 링크의 경로가 일치할 때 활성화되는 스타일을 제공.
