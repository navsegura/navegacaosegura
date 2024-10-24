import "./Navbar.css";
import { Link } from 'react-router-dom'
import { Images } from "../../assets/images";

function Navbar() {
  return (
    <>
    <div className="nav_bar_container">
        <nav className="navbar" >
          <h1 className="logo">Naveguard</h1>
            <ul className="all_links">
                <li className="lorem1">
                    <Link to="/">Home</Link>
                </li>
                <li className="lorem1">
                    <Link to="/planos">Planos</Link>
                </li>
                <li className="lorem1">
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li className="lorem1">
                    <Link to="/faleconosco">Fale Conosco</Link>
                </li>
            </ul>
            <img src={Images.Sol} alt="sol" className="light_mode" width={40}/>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
