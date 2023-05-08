import { NavLink } from "react-router-dom";

// const Navbar = () => {
export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Blog</h1>
      <div className="links">
        <NavLink to="/"> Home</NavLink> |
        <NavLink
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "4px",
          }}
        >
          New Post
        </NavLink>
      </div>
    </nav>
  );
}
// export default Navbar;
