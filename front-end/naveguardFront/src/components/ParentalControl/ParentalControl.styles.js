import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 8vh 0 0 4vw;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        padding: 10vh 0 0 2vw;
    }

    @media (max-width: 480px) {
        padding: 8vh 0 0 1vw;
    }
`

export const ControlContent = styled.div`
    padding: 5vh;
    max-width: 1440px;
    height: 70vh;
    /* border: red solid 1px; */
    background-color: #f5f5f5;
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
    @media (max-width: 850px) {
        font-size: 1.5rem;
    }
`

export const Line = styled.div`
    width: 100%;
    border: 1px solid #D9D9D9;
    /* margin-top: 3rem; */

    @media (max-width: 675px) {
        /* margin: 1rem 0; */
        /* display: none; */
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    /* border: green solid 1px; */
    @media (max-width: 1440px) {
        gap: 1rem;
    }
`

export const Card = styled.div`
    /* max-width: 230px; */
    min-width: 300px;
    max-width: 9vw;
    /* width: 100%; */
    /* min-height: 400px; */
    height: 35vh;
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

    &:hover {
        transform: scale(1.04);
    }

    @media (max-width: 1440px) {
        width: 30vw;
        height: 25vh;
        gap: 0.5rem;
    }

    @media (max-width: 675px) {
        height: 25vw;
    }

    @media (max-width: 656px) {
        min-width: 250px;
        height: 20vw;
    } 
`

export const Img = styled.img`
    @media (max-width: 1440px) {
    width: 100px;
    margin-bottom: 1rem;
    }

    @media (max-width: 656px) {
        width: 80px;
    }

    @media (max-width: 555px) {
        width: 60px;
    }
`

export const Description = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: .8rem;
    color: #FFFFFF;

    @media (max-width: 1440px) {
        font-size: .7rem;
    }

    @media (max-width: 656px) {
        font-size: .5rem;
    }

    @media (max-width: 555px) {
        font-size: .4rem;
    }
`
