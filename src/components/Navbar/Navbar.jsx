import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
          <div className="navItems">
            <button className="navButton">Dang ki</button>
            <button className="navButton">Dang nhap</button>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
