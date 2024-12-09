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
import { useEffect } from 'react';
import { findMe } from '../../services/user-service';

const ChoiceScreen = ({ initialUsers }) => {
  const [users, setUsers] = useState(initialUsers);
  const [isModalOpen, setModalOpen] = useState(false);

  const papyrus = localStorage.getItem('papyrus');

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [urlPhoto, setUrlPhoto] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    findMe()
    .then((response) => {
      setUrlPhoto(response.data.urlPhoto);
      setName(response.data.name);
    })
  }, []);

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

  return (
    <>
    <NuvensContainer/>
      <ResolutionNotAvailable />
      <NavBar />
      <SideBar/>
      <Container>
        <UserGrid>
        <ImageUser>
            {imgTest === null ? (
              <Link to="/user-profile"><Img src={Images.UserMaster} alt="User master" /></Link>
            ) : (
              <Img src={urlPhoto || imgTest} alt={nameProfile} /> 
            )}

            {nameProfile === null && name === null ? (
              <P>Responsável</P>
            ) : (
              <P>{nameProfile || name}</P>
            )}
          </ImageUser>
          {papyrus ? (
            <>
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
              </>
          ) : (
          <>
            {users.slice(0, 1).map((user) => (
              <UserCard key={user.id}>
                <Link to={'/kids-page'}>
                  <ImageUser>
                    <Img src={Images.UserChild} alt={user.name} />
                  </ImageUser>
                </Link>
                <P>{user.name}</P>
              </UserCard>
            ))}
              {users.length === 1 ? null : (
                <AddUserCard onClick={handleOpenModal} aria-label="Add a new user">
                  <AddMore>
                    <MoreIcon className='bx bx-plus-medical' aria-hidden="true"></MoreIcon>
                  </AddMore>
                </AddUserCard>
              )}
              </>
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
