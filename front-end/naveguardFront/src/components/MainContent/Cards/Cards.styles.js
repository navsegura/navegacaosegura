import styled from "styled-components";

export const CardsContainer = styled.section`
    /* margin-top: 10rem; sem efeito aplicado */
    display: flex;
    justify-content: center;
    position: relative;
    /* Position: OK */
    /* border: red solid 1px; */
    bottom: 1rem;
    gap: 5rem;
    margin: 0;
    padding: 0;
    z-index: 1;
    cursor: pointer;

    @media (max-width: 1150px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Card = styled.div`
    display: flex;
    /* border: red solid 1px; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: .4s ease-in-out;
    background: linear-gradient(to right, #3EABEE 0%, #289BEB 50%, #118BE9 100%);
    border-radius: 15px 15px 15px 15px;
    width: 25rem;
    height: 20rem;
    background: linear-gradient(to right, #3EABEE 0%, #289BEB 50%, #118BE9 100%);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    @media (max-width: 1400px) {
        width: 20rem;
        height: 20rem;
    }

`

export const HeaderCard = styled.div`
    display: flex;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 15px 15px 0 0;
    align-items: center;
    background-color: #FFFFFF;
    width: 25rem;
    height: 5rem;
    font-size: 1.5rem;
    color: #FF6F00;

    @media (max-width: 1400px) {
        width: 20rem;
    }
`

export const ContentCard = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: white;
    font-size: 1.2rem;
    width: 15rem;
    height: 15rem;
    font-family: var(--secondary-font);
`