import "./Navbar.css";
import { Images } from "../../../assets/images";

function Navbar() {
  return (
    <>
    <nav className="navbar" >
      <h1 className="logo">Naveguard</h1>
        <ul className="all_links">
            <li className="lorem1">
                <a href="...">LOREM</a>
            </li>
            <li className="lorem1">
                <a href="...">LOREM</a>
            </li>
            <li className="lorem1">
                <a href="...">LOREM</a>
            </li>
        </ul>
        <img src={Images.Sol} alt="sol" className="light_mode" width={40}/>
    </nav>
    </>
  );
}

export default Navbar;
