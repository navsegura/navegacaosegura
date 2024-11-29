import styled, { keyframes } from "styled-components";

const movimentoNuvens = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(1000px);
    }
`;

const movimentoNuvensII = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-1000px);
    }
`;

const movimentoNuvensIII = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(800px);
    }
`;

const movimentoNuvensIV = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-800px);
    }
`;

export const MainContainer = styled.div`
    /* padding: 8vh 0 0 0; */
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10vh 2vh 0vh 3vw;
    /* border: red solid; */
    /* justify-content: center; */

    @media (max-width: 480px) {
        padding: 6vh 0 0 0vw;
    }

    @media (max-width: 370px) {
        display: none;
    }
`

export const Back = styled.div`
    /* position: absolute; */
    color: #101E43;
    font-size: 3rem;
    cursor: pointer;
    &:hover {
        color: #FF6F00;
        transition: all 0.3s ease-in-out;
    }
    /* width: 100%;
    height: 100%; */
    /* z-index: -1; */
`

export const Span = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const ControlContent = styled.div`
    padding: 5vh;
    max-width: 1240px;
    height: auto;
    /* border: red solid 1px; */
    margin: auto;
    background-color: #f5f5f5;
    /* border: red solid; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    width: 100%;

    @media (max-width: 1024px) {
        padding: 3vh;
    }

    @media (max-width: 768px) {
        padding: 2vh;
    }
    
`

export const TitleControl = styled.h1`
    color: #101E43;
    @media (max-width: 850px) {
        font-size: 1.5rem;
    }
`

export const Line = styled.hr`
    margin: 40px 0;
    border-top: 1px solid #D9D9D9;
    /* margin-top: 3rem; */

    @media (max-width: 675px) {
        /* margin: 1rem 0; */
        /* display: none; */
    }
`

export const CardContainer = styled.div`
    /* min-width: 500px; */
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
    gap: 20px;
    /* flex-wrap: wrap; */
    /* align-items: center; */
    justify-items: center;
    /* border: green solid 1px; */

    @media (max-width: 1500px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 675px) {
        grid-template-columns: repeat(1, 1fr);
    }

    & button {
        border: none;
        background: none;
        cursor: pointer;
        margin: 20px 0;
    }
`

export const Card = styled.div`
    max-width: 270px;
    /* min-width: 300px;
    max-width: 9vw; */
    width: 100%;
    /* min-height: 400px; */
    height: auto;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    background-color: #101E43;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 0 2rem;
    /* border: red solid 1px; */

    &:hover {
        background-color: #1B2B54;
    }

    @media (max-width: 1440px) {
        /* width: 30vw;
        height: 25vh;
        gap: 0.5rem; */
    }

    @media (max-width: 675px) {
        /* height: 25vw; */
    }

    @media (max-width: 656px) {

    } 
`

export const MolduraImgFamily = styled.div`
    width: 100px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: red solid; */
`

export const MolduraImg = styled.div`
    width: 140px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: red solid; */
`

export const Img = styled.img`
    width: 100%;

    @media (max-width: 1440px) {
    width: 100px;
    margin-bottom: 1rem;
    }

    @media (max-width: 656px) {
        width: 80px;
    }

    /* @media (max-width: 555px) {
        width: 60px;
    } */
`

export const Description = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: .8rem;
    color: #FFFFFF;
    margin-bottom: 15px;

    @media (max-width: 1440px) {
        font-size: .7rem;
    }

    /* @media (max-width: 656px) {
        font-size: .5rem;
    }

    @media (max-width: 555px) {
        font-size: .4rem;
    } */
`

export const Overlay = styled.div`
    position: absolute;
    /* border: red solid 1px; */
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2000;

    & div {
        /* border: green solid; */
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: row-reverse;
        /* border: none; */
    }
`

export const NuvemOverlay = styled.img`
    /* border: red solid; */
    position: relative;
    animation: ${movimentoNuvens} forwards 2s;
    opacity: 1;
    width: 10000px;
    height: 2000px;
    z-index: -2;

    & div {
        border: red solid;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        & video {
            z-index: 10000000;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
    }
`

export const NuvemOverlayII = styled.img`
    /* border: red solid; */
    position: relative;
    animation: ${movimentoNuvensII} forwards 2s;
    opacity: 1;
    width: 10000px;
    height: 2000px;
    z-index: -2;
`

export const NuvemOverlayIII = styled.img`
    /* border: red solid; */
    position: absolute;
    animation: ${movimentoNuvensIII} forwards 4s;

    width: 2000px;
    height: 2000px;
    z-index: -1;
`

export const NuvemOverlayIV = styled.img`
    /* border: red solid; */
    position: absolute;
    animation: ${movimentoNuvensIV} forwards 4s;
    width: 2000px;
    height: 2000px;
    bottom: 0;
    z-index: -1;
`

