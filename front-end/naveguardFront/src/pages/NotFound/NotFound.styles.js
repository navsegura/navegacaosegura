import styled, { keyframes } from 'styled-components'

export const ErrorContainer = styled.div`
    padding-top: 6vh;;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ErrorContent = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Img = styled.img`
    z-index: 1000;
    width: 40rem;
    margin-top: 2rem;
`

export const Sea = styled.div`
    position: absolute;
    top: 77%;
    z-index: 200;
    width: 100%;
    height: 600px;
    background-color: #116AB9;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Return = styled.button`
    margin-top: 12rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 20rem;
    height: 4rem;
    align-items: center;
    border-radius: 4px;

    &:hover {
        background-color: #D47E3B;
    }
`

const revealDiagonal = keyframes`
  0% {
    clip-path: polygon(0% 0%, 0% 100%, 100% 0%, 100% 0%);
    opacity: 0.5;
  }
  100% {
    clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%);
    opacity: 1;
  }
`;

export const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

export const Loader = styled.img`
  width: 350px;
  height: auto;
  animation: ${revealDiagonal} 2s ease forwards;
  filter: invert(1) brightness(2);
`;
