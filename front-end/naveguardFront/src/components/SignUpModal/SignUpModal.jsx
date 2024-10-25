import { ModalOverlay, ModalContent, Input, Button } from './SignUpModal.styles'

const SignUpModal = ({ onClose, onAddUser }) => {
    const [ name, setName ] = useState('')

    const handleNameBlur = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
          onAddUser(name);
          setName('');
          onClose();
        }
      };
  return (
    <>
      <ModalOverlay>
      <ModalContent>
        <h2>Cadastrar Usuário</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Digite seu nome"
            onBlur={handleNameBlur}
          />
          <Button type="submit">Cadastrar</Button>
          <Button onClick={onClose}>Fechar</Button>
        </form>
      </ModalContent>
    </ModalOverlay>
    </>
  );
};

export default SignUpModal
