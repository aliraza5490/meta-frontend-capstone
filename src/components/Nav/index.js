import { NavLink } from "react-router-dom";
import "./styles.scss";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/booking">Booking</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
