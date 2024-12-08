import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10vh 2vh 0vh 3vw;

    @media (max-width: 480px) {
        padding: 6vh 0 0 0vw;
    }

    @media (max-width: 370px) {
        display: none;
    }
`

export const Back = styled.div`
    color: #101E43;
    font-size: 3rem;
    cursor: pointer;
    &:hover {
        color: #FF6F00;
        transition: all 0.3s ease-in-out;
    }
`

export const Span = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const ControlContent = styled.div`
    padding: 3vh 3rem 3vh 3rem;
    max-width: 1240px;
    height: auto;
    margin: auto;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    width: 100%;

    @media (max-width: 1024px) {
        padding: 3vh 0 3vh 0;
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

    @media (max-width: 675px) {
    }
`

export const CardContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-items: center;

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
    max-width: 9vw;
    width: 100%;
    height: auto;
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

    &:hover {
        background-color: #1B2B54;
    }

    @media (max-width: 1440px) {
    }

    @media (max-width: 675px) {
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
`

export const MolduraImg = styled.div`
    width: 140px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
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
`

export const Description = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: .8rem;
    color: #FFFFFF;
    margin-bottom: 15px;

    @media (max-width: 1440px) {
        font-size: .7rem;
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2000;

    & div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: row-reverse;
    }
`
