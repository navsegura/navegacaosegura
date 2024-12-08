import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import { Images } from '../../assets/images';
import SignUpModal from '../../components/SignUpModal/SignUpModal';
import SideBar from '../../components/SideBar/SideBar';
import NavBar from "../../components/Navbar/Navbar"
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NuvensContainer from '../../components/Nuvens/Nuvens';
import ResolutionNotAvailable from '../../components/ResolutionNotAvailable/ResolutionNotAvailable';
import { Container, UserGrid, UserCard, AddUserCard, ImageUser, Img, AddMore, MoreIcon, P } from './ChoiceScreen.styles';

const ChoiceScreen = ({ initialUsers }) => {
  const [users, setUsers] = useState(initialUsers);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const onAddUser = (name) => {
    const newUser = {
      id: Date.now().toString(),
      name,
      image: Images.UserChild,
    };
    setUsers((prevUsers) => [...prevUsers, newUser])
  };

  const nameProfile = localStorage.getItem('name');
  const imgTest = localStorage.getItem('profilePic')
  // const isLogedIn = localStorage.getItem('isLogedIn')

  return (
    <>
    <NuvensContainer/>
      <ResolutionNotAvailable />
      <NavBar />
      <SideBar/>
      <Container>
      {/* <ReturnButton className='bx bx-chevrons-left'></ReturnButton> */}
        <UserGrid>
        <ImageUser>
            {imgTest === '' ? (
              <Link to="/user-profile"><Img src={Images.UserMaster} alt="User master" /></Link>
            ) : (
              <Img src={imgTest} alt={nameProfile} /> 
            )}

            {nameProfile === null ? (
              <P>Responsável</P>
            ) : (
              <P>{nameProfile}</P>
            )}
          </ImageUser>
          {users.slice(0, 3).map((user) => (
            <UserCard key={user.id}>
              <Link to={'/kids-page'}>
                <ImageUser>
                  <Img src={Images.UserChild} alt={user.name} />
                </ImageUser>
              </Link>
              <P>{user.name}</P>
            </UserCard>
          ))}
            {users.length === 3 ? null : (
              <AddUserCard onClick={handleOpenModal} aria-label="Add a new user">
                <AddMore>
                  <MoreIcon className='bx bx-plus-medical' aria-hidden="true"></MoreIcon>
                </AddMore>
              </AddUserCard>
            )}

        </UserGrid>
        {isModalOpen && (
          <SignUpModal onClose={handleCloseModal} onAddUser={onAddUser} />
        )}
      </Container>
    </>
  );
};

ChoiceScreen.propTypes = {
  initialUsers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

ChoiceScreen.defaultProps = {
  initialUsers: [],
};

export default ChoiceScreen;
