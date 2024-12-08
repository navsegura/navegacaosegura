// Loading.styles.js
import styled, { keyframes } from 'styled-components';

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

const revealVertical = keyframes`
  0% {
    clip-path: polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%);
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

export const LoadingInitial = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(17, 139, 233);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10000;
`;

export const LoaderInitial = styled.img`
  width: 350px;
  height: auto;
  animation: ${revealDiagonal} 2s ease forwards;
  filter: invert(1) brightness(2);
`;

export const Logo = styled.h1`
  font-size: 1rem;
  letter-spacing: .5rem;
  text-shadow: 2px 2px 3px rgba(255,255,255,0.1);
  color: white;
  animation: ${revealVertical} 3s ease forwards;
`;
