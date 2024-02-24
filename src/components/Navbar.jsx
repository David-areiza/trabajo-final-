import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Logos</h1>
      <Link to="/">Home</Link>
      <Link to="/create-country">Create country</Link>
      <Link to="/manage-country">Manage country</Link>
    </nav>
  );
};

export default Navbar;
