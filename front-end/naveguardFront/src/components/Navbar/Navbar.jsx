import { Link, useNavigate } from 'react-router-dom';
import { Images } from "../../assets/images";
import { useState } from "react";
import { 
  Container, Nav, Navigation, UserNavigation, UserPhoto, NameProfile, DropDown, 
  DropdownMenu, DropdownItem, UserHover, Line, I, Logo, MenuList, List, A, ListTwo
} from "./Navbar.styles";
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import { isAuthenticated, logout } from '../../services/auth-service';
import { findMe } from '../../services/user-service';
import { useEffect } from 'react';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const [urlPhoto, setUrlPhoto] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    findMe()
    .then((response) => {
      setUrlPhoto(response.data.urlPhoto);
      setName(response.data.name);
    })
  }, []);
  
  console.log(urlPhoto);

  const nameProfile = localStorage.getItem('name');
  const imgTest = localStorage.getItem('profilePic');
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' || isAuthenticated() === true;

  const handleNavigation = (route) => {
    if (route === 'logout') {
      setIsLoading(true);
      logout();
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('profilePic');
      localStorage.removeItem('email');
      localStorage.removeItem('name');
      localStorage.removeItem('papyrus');
      
        setTimeout(() => {
          setIsLoading(false);
          navigate('/');
          window.location.reload();
        }, 2000);
      
    } else {
      navigate(route);
    }
  };

  return (
  <>
    
    <Container>
      <LoadingComponent isLoading={isLoading} />
      <Nav>
        <Link to="/">
          <Logo>Naveguard</Logo>
        </Link>

        {isLoggedIn ? (
          <Navigation>
            <UserNavigation>
              <Line />
              <UserHover onClick={toggleDropDown}>
                <UserPhoto src={imgTest || urlPhoto || Images.UserMaster} alt="Foto de perfil" width={30} height={30} />
                <NameProfile>{nameProfile || name}</NameProfile>
                <DropDown>
                  <I isOpen={dropdownOpen} className='bx bx-chevron-down' style={{ color: '#a0a0a0' }}></I>
                </DropDown>
                {dropdownOpen && (
                  <DropdownMenu>
                    <DropdownItem>
                      <Link to="/user-profile">Profile</Link>
                    </DropdownItem>
                    <DropdownItem onClick={() => handleNavigation('logout')}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </UserHover>
            </UserNavigation>
          </Navigation>
        ) : (
          <MenuList>
            <List>
              <A href="#home">Home</A>
            </List>
            <List>
              <A href="#planos">Planos</A>
            </List>
            <ListTwo>
              <Link to="/about">Sobre</Link>
            </ListTwo>
            <ListTwo>
              <Link to="/faleconosco">Fale Conosco</Link>
            </ListTwo>
          </MenuList>
        )}
      </Nav>
    </Container>
    </>
  );
}



export default Navbar;
