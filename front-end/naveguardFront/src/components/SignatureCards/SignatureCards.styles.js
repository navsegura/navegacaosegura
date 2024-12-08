import styled from "styled-components";

export const CardsContainer = styled.section`
    display: flex;
    gap: 5%;
    flex-direction: row;
    left: 0%;
    right: 0;
    align-items: center;
    justify-content: center;
    z-index: 10;
    height: 100vh;
    transition: .4s ease-in-out;

    @media (max-width: 1130px) {
        flex-direction: column;
    }

    @media (max-width: 374px) {
        display: none;
    }
`

export const Card = styled.div`
    color: #f5f5f5;
    height: 30rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem 2rem;
    background: linear-gradient(to bottom, #3EABEE 0%, #289BEB 50%, #118BE9 100%);
    border-radius: 2%;
    font-size: small;
    cursor: pointer;
    transition: .4s ease-in-out;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &:hover {
        transform: scale(1.02);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }
`

export const CardTitle = styled.h3`
    font-size: 1.2rem;
`

export const CardPlans = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const Plan = styled.div`
    display: flex;
    gap: 4px;
    flex-direction: row;
    align-items: center;
`

export const Img = styled.img`
    width: 35px;
`

export const CardButton = styled.button`
    transition: 0.5s;

    &:hover {
        background-color: #E5560C;
        cursor: pointer;
    }
`
