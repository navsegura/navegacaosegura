import styled from "styled-components";

export const ModalOverlay = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: rgb(217, 217, 217, 50%);
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;

export const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const ButtonClose = styled.button`
  width: 20px;
  height: 20px;
  background-color: #3d4a6a;
  font-size: 1rem;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  background-color: #3d4a6a;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #191a1f;
  }
`;
