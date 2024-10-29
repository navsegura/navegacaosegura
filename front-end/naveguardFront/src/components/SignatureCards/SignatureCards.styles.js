import styled from "styled-components";

export const CardsContainer = styled.section`
    top: 80rem;
    position: relative;
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
`

export const Card = styled.div`
    color: #f5f5f5;
    height: 30rem;
    width:20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:left;
    padding: 1rem;
    background: linear-gradient(to bottom, #3EABEE 0%, #289BEB 50%, #118BE9 100%);
    border-radius: 2%;
    white-space: nowrap;
    font-size: small;
    cursor: pointer;
    transition: .4s ease-in-out;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &:hover {
        transform: scale(1.02);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }
`

export const CardTitle = styled.div`
    /* position: relative; */
    top: -10%;
    white-space: nowrap;
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    top: 8%;
`

export const CardIcons = styled.div`
    display: flex;
    flex-direction: column;
    width: 10%;
    left: -45%;
    top: 10%;
    position: relative;
`

export const CardButton = styled.button`
    width: 80%;
    height: 25%;
    text-align: center;
    align-items: center;
    justify-content: center;
    justify-self: center;
    align-self: center;
    top: 45%;
    left: 6%;
    position: absolute;
    transition: 0.5s;

    &:hover {
        background-color: #E5560C;
        cursor: pointer;
    }
`

export const CardBenefits = styled.h3`
    position: relative;
    left: 4%;
    bottom: 100%;
    display: flex;
    flex-direction: column;
`
