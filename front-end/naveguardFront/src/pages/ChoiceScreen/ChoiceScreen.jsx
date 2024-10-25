import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import { Images } from '../../assets/images';
import SignUpModal from '../../components/SignUpModal/SignUpModal';
import SideBar from '../../components/SideBar/SideBar';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  return (
    <>
      <Navbar />
      <SideBar/>
      <Container>
      {/* <ReturnButton className='bx bx-chevrons-left'></ReturnButton> */}
        <UserGrid>
        <ImageUser>
            <Link to="/user-profile"><Img src={Images.UserMaster} alt="User master" /></Link>
            <P>Responsável</P>
          </ImageUser>
          {users.map((user) => (
            <UserCard key={user.id}>
              
              <ImageUser>
                <Img src={user.image} alt={user.name} />
              </ImageUser>
              <P>{user.name}</P>
            </UserCard>
          ))}
          <AddUserCard onClick={handleOpenModal} aria-label="Add a new user">
            <AddMore>
              <MoreIcon className='bx bx-plus-medical' aria-hidden="true"></MoreIcon>
            </AddMore>
          </AddUserCard>
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
