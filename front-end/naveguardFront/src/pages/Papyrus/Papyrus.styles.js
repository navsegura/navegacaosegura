import styled, { keyframes } from "styled-components";

export const movimentoSiriLeft = keyframes`
    0% {
        transform: translateX(-1000px);
    }
    100% {
        transform: translateX(1000px);
    }
`;

export const movimentoSiriRight = keyframes`
    0% {
        transform: translateX(1000px);
    }
    100% {
        transform: translateX(-1000px);
    }
`;

export const PapyrusContainer = styled.main`
    background-color: #ceb88d;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ImgSiri = styled.img`
    position: absolute;
    top: 0;
    width: 90px;
    animation: ${movimentoSiriLeft} 15s linear infinite;
    z-index: 1;
`

export const ImgSiriII = styled.img`
    position: absolute;
    top: 0;
    width: 90px;
    animation: ${movimentoSiriRight} 15s linear infinite;
    z-index: 1;
`

export const ImgSiriIII = styled.img`
    position: absolute;
    top: 10;
    width: 70px;
    animation: ${movimentoSiriLeft} 40s linear infinite;
    z-index: 1;
`

export const PapyrusContent = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 40px;
    max-width: 800px;
    /* display: block; */
    width: 100%;
    /* height: 600px; */
    background-color: #a68e60;
    /* border: red solid; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    z-index: 1;


    & span {
        font-size: 1.2rem;
        font-family: 'Luckiest Guy', cursive;
        color: #f5f5f5;
    }
`

export const PapyrusTitle = styled.h1`
    font-size: 2rem;
    color: #f5f5f5;
    text-shadow: 2px 2px 3px rgba(255,255,255,0.1);
    margin-bottom: 2rem;
    /* text-align: center; */
    /* font-family: 'Luckiest Guy', cursive; */
`

export const TicketPromotional = styled.form`
    margin-top: 1rem;

    & input {
        font-size: 1.2rem;
        padding: 15px;
        margin: 10px;
        border: none;
        border-radius: 4px;
        text-transform: 'uppercase';
        outline: none;
        font-family: 'Luckiest Guy', cursive;
        letter-spacing: 2px;
    }
`

export const Spinner = styled.div`
    width: 24px;
    height: 24px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-top: 10px;
`

export const spin = keyframes`
    to {
    transform: rotate(360deg);
    }
`

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #3d4a6a;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #2e3651;
    }
`;
