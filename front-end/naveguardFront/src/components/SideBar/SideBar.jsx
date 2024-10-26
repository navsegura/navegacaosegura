import { useNavigate } from 'react-router-dom'; 
import { SideBarMenu, LogOut, Option, I } from "./SideBar.styles.js";

const SideBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    if (route === 'logout') {
     
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail'); 
      localStorage.removeItem('token');

      navigate('/');
  
    
      window.location.reload();
    } else {

      navigate(route);
    }
  };

  return (
    <SideBarMenu>
      <Option>
        <abbr title="Home">
          <I onClick={() => handleNavigation('/')} className='bx bx-home-alt-2' style={{ color: '#a0a0a0' }}></I>
        </abbr>
        <abbr title="Profile">
          <I onClick={() => handleNavigation('/user-profile')} className='bx bx-user' style={{ color: '#a0a0a0' }}></I>
        </abbr>
        <abbr title="Choice Screen">
          <I onClick={() => handleNavigation('/choice-screen')} className='bx bx-plus-medical' style={{ color: '#a0a0a0' }}></I>
        </abbr>
        <abbr title="Dashboard">
          <I onClick={() => handleNavigation('/dashboard')} className='bx bxs-dashboard' style={{ color: '#a0a0a0' }}></I>
        </abbr>
        <abbr title="Dashboard">
          <I onClick={() => handleNavigation('/dashboard')} className='bx bxs-dashboard' style={{ color: '#a0a0a0' }}></I>
        </abbr>
        <abbr title="Dashboard">
          <I onClick={() => handleNavigation('/dashboard')} className='bx bxs-dashboard' style={{ color: '#a0a0a0' }}></I>
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