import styled from "styled-components";

export const CardsContainer = styled.section`
    /* margin-top: 10rem; sem efeito aplicado */
    display: flex;
    justify-content: center;
    position: relative;
    /* bottom: 1rem; */
    gap: 5rem;
    margin: 0;
    padding: 0;
    z-index: 1;
    cursor: pointer;

    @media (max-width: 650px) {
    .cards {
        align-items: center;
        flex-direction: column;
    }
}
`

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: .4s ease-in-out;
    width: 13rem;
    height: 10rem;
    background: linear-gradient(to right, #3EABEE 0%, #289BEB 50%, #118BE9 100%);
    border-radius: 15px 15px 15px 15px;
    width: 25rem;
    height: 20rem;
    background: linear-gradient(to right, #3EABEE 0%, #289BEB 50%, #118BE9 100%);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`

export const HeaderCard = styled.div`
    display: flex;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 15px 15px 0 0;
    width: 13rem;
    align-items: center;
    background-color: #FFFFFF;
    width: 25rem;
    height: 5rem;
    font-size: 1.5rem;
    color: #FF6F00;
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