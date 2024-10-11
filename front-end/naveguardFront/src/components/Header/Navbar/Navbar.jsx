import "./Navbar.css";
import { Images } from "../../../assets/images";

function Navbar() {
  return (
    <>
    <div className="nav_bar_container">
        <nav className="navbar" >
          <h1 className="logo">Naveguard</h1>
            <ul className="all_links">
                <li className="lorem1">
                    <a href="...">Lorem</a>
                </li>
                <li className="lorem1">
                    <a href="...">Lorem</a>
                </li>
                <li className="lorem1">
                    <a href="...">Lorem</a>
                </li>
            </ul>
            <img src={Images.Sol} alt="sol" className="light_mode" width={40}/>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
