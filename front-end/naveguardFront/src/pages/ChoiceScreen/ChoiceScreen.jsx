import { useState } from 'react'
import SignUpModal from '../../components/SignUpModal/SignUpModal';
import Navbar from '../../components/Navbar/Navbar';
// import { Images } from '../../UserGrid/images';
import { Container, UserGrid, UserCard, AddUserCard } from './ChoiceScreen.styles'

const ChoiceScreen = ({ users, onAddUser }) => {
  const [ isModalOpen, setModalOpen ] = useState(false)

  const handleOpenModal = () => {
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  }
  return (
    <>
    {/* is missing in props validation */}
    <Navbar/>
    <Container>
      <h1>Quem está assistindo?</h1>
      <UserGrid>
        {users.map((user, index) => (
          <UserCard key={index} name={user} />
        ))}
        <AddUserCard onClick={handleOpenModal} />
      </UserGrid>

      {isModalOpen && (
        <SignUpModal onClose={handleCloseModal} onAddUser={onAddUser} />
      )}
    </Container>
      </>
  );
};

export default ChoiceScreen;