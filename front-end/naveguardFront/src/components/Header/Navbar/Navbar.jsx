<<<<<<< HEAD
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
                    <a href="...">Home</a>
                </li>
                <li className="lorem1">
                    <a href="...">Planos</a>
                </li>
                <li className="lorem1">
                    <a href="...">Sobre</a>
                </li>
                <li className="lorem1">
                    <a href="...">Fale Conosco</a>
                </li>
            </ul>
            <img src={Images.Sol} alt="sol" className="light_mode" width={40}/>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
=======
>>>>>>> e3c44e34d116d1ed73297fbd042e49049710edf1
