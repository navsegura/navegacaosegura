import styled, {keyframes} from "styled-components";

const movimentoNuvens = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1000%);
  }
`;

export const Nuvens = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1000;
`;

export const ImgNuvens = styled.img`
  position: absolute;
  width: 400px;
  opacity: 0.8;
  animation: ${movimentoNuvens} 220s linear infinite;

`;
