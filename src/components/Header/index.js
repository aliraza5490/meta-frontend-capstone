import logo from "../../assets/logo_wide.png";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" />
    </header>
  );
};

export default Header;
