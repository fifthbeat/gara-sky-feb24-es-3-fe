import { Link } from "react-router";
import "./styles.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src="/logo-sky-bianco.svg" alt="Sky logo" className="header__logo" />
      </Link>
    </header>
  );
};

export default Header;
