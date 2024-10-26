import { Link } from 'react-router-dom'
import { Images } from "../../assets/images";
import { Container, Nav, Logo, MenuList, List, LightMode } from "./Navbar.styles";

function Navbar() {
  return (
    <>
    <Container>
        <Nav>
          <Logo>Naveguard</Logo>
            <MenuList>
                <List>
                    <Link to="/">Home</Link>
                </List>
                <List>
                    <Link to="/planos">Planos</Link>
                </List>
                <List>
                    <Link to="/about">Sobre</Link>
                </List>
                <List>
                    <Link to="/faleconosco">Fale Conosco</Link>
                </List>
            </MenuList>
            <LightMode src={Images.Sol} alt="sol" className="light_mode" width={40}/>
        </Nav>
      </Container>
    </>
  );
}

export default Navbar;
