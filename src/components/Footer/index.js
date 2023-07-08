import logo from "../../assets/logo_high.png";
import "./styles.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <div>
        <p>©Copyright 2022 - Little Lemon</p>
      </div>
    </footer>
  );
};

export default Footer;
