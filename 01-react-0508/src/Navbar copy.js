import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Nobody's Blog</h1>
      <div className="links">
        {/* <a href="/"> Home</a> |
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "4px",
          }}
        >
          New Blog
        </a> */}
        <NavLink to="/"> Home</NavLink> |
        <NavLink
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "4px",
          }}
        >
          New Blog
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
