import logo from "../images/logoKasa.svg"
import Navigation from "./navigation";
const Header = () => {
  return (
    <header>
    <img src={logo} alt="logo de kasa" />
    <Navigation/>
    </header>
  );
};

export default Header;