import { Link } from 'react-router-dom'
import { Images } from "../../assets/images";
import { Container, Nav, Logo, MenuList, List, A, LightMode } from "./Navbar.styles";

function Navbar() {
  return (
    <>
    <Container>
        <Nav>
          <Link to="/">
            <Logo>Naveguard</Logo>
          </Link>
            <MenuList>
                <List>
                    <A href="#home">Home</A>
                </List>
                <List>
                    <A href="#planos">Planos</A>
                </List>
                <List>
                    <Link to="/sobre">Sobre</Link>
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
