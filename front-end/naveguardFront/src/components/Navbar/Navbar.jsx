import { Link } from 'react-router-dom'
import { Images } from "../../assets/images";
import { Container, Nav, Navigation, UserNavigation, UserPhoto, NameProfile, DropDown, Line, I, Logo, MenuList, List, A, LightMode } from "./Navbar.styles";

function Navbar() {
  const nameProfile = localStorage.getItem('name');
  const imgTest = localStorage.getItem('profilePic')
  const isLogedIn = localStorage.getItem('isLogedIn')
  return (
    <>
  {isLogedIn === true ? (
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
                    <Link to="/about">Sobre</Link>
                </List>
                <List>
                    <Link to="/faleconosco">Fale Conosco</Link>
                </List>
            </MenuList>
            <LightMode src={Images.Sol} alt="sol" className="light_mode" width={40}/>
        </Nav>
      </Container>
  ) : (
    <Container>
        <Nav>
          <Link to="/">
            <Logo>Naveguard</Logo>
          </Link>
        <Navigation>
          <UserNavigation>
            <Line />
            <UserPhoto src={imgTest} alt="Foto de perfil" width={30} height={30} />
            <NameProfile>{nameProfile}</NameProfile>
            <DropDown>
              <I className='bx bx-chevron-down' style={{ color: '#a0a0a0' }}></I>
            </DropDown>
          </UserNavigation>
        </Navigation>
      </Nav>

      </Container>
  )}
    </>
  );
}

export default Navbar;
