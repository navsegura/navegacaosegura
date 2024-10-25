import PropTypes from 'prop-types';
import { useState } from 'react';
import { ModalOverlay, ModalContent, Input, Close, ButtonClose, Button } from './SignUpModal.styles';

const SignUpModal = ({ onClose, onAddUser }) => {
  const [name, setName] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAddUser(name);
      setName('');
      onClose();
    } else {
      alert("Por favor, digite seu nome.");
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
      <Close>
        <ButtonClose type="button" onClick={onClose}>x</ButtonClose>
      </Close>
        <h2>Criar Perfil</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <Input
              type="text"
              placeholder="Nome do Usuário"
              value={name}
              onChange={handleNameChange}
              required
            />
          </label>
          <Button type="submit">Cadastrar</Button>

        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

SignUpModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAddUser: PropTypes.func.isRequired,
};

export default SignUpModal;
