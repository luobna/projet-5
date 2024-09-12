import logo from "../images/logoKasa.svg"
import Navigation from "./Navigation";
const Header = () => {
  return (
    <header>
    <img src={logo} alt="logo de kasa" />
    <Navigation/>
    </header>
  );
};

export default Header;