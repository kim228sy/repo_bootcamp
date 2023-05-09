import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Blog!</h1>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink
          to="/create"
          // style={{
          //   color: "white",
          //   backgroundColor: "#f1356d",
          //   borderRadius: "4px",
          // }}
        >
          Create
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
