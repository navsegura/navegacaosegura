import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react'; 
import { SideBarMenu, LogOut, Option, I } from "./SideBar.styles.js";
import LoadingComponent from '../LoadingComponent/LoadingComponent.jsx';
import { logout } from '../../services/auth-service.js';

const SideBar = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = (route) => {
    if (route === 'logout') {
      setIsLoading(true);

      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('profilePic');
      localStorage.removeItem('email');
      localStorage.removeItem('name');
      localStorage.removeItem('papyrus');
      logout();
      
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
    <SideBarMenu>
      <LoadingComponent isLoading={isLoading}/>
      <Option>
        <abbr title="Início">
          <I onClick={() => handleNavigation('/')} className='bx bx-home-alt-2' style={{ color: '#a0a0a0' }}></I>
        </abbr>
        <abbr title="Perfil">
          <I onClick={() => handleNavigation('/user-profile')} className='bx bx-user' style={{ color: '#a0a0a0' }}></I>
        </abbr>
        <abbr title="Sessão">
          <I onClick={() => handleNavigation('/choice-screen')} className='bx bx-plus-medical' style={{ color: '#a0a0a0' }}></I>
        </abbr>
        <abbr title="Artigos">
          <I onClick={() => handleNavigation('/articles')} className='bx bx-library' style={{ color: '#a0a0a0' }}></I>
        </abbr>
        <abbr title="Artigos">
          <I onClick={() => handleNavigation('/about')} className='bx bxs-group' style={{ color: '#a0a0a0' }}></I>
        </abbr>
      </Option>
      <LogOut>
        <Option>
          <abbr title="Log out">
            <I onClick={() => handleNavigation('logout')} className='bx bx-log-out' style={{ color: '#a0a0a0' }}></I>
          </abbr>
        </Option>
      </LogOut>
    </SideBarMenu>
  );
};

export default SideBar;