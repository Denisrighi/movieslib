import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">MoviesLib</Link>
      </h2>
      <Link to="/movie/1">Movie</Link>
      <Link to="/search/"></Link>
    </nav>
  );
};

export default NavBar;
