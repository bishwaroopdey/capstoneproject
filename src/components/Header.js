import "../assets/styles/Header.css"
import Nav from "./Nav";
import logo from "../assets/images/Asset 16@4x.png"

function Header() {
  return (
    <header>
      <img src={logo} alt="primary-logo" className="mainLogo" height={100}/>
      <Nav/>
    </header>
  );
}

export default Header;