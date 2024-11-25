import styled from "styled-components";

export const IslandContainer = styled.div`
    width: 100%;
    margin-top: 20rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* position: relative; */
    /* Consertado aqui */
    top: 30rem;

    @media (max-width: 650px) {
        top: 13rem;
    }
`

export const Beach = styled.div`
    /* position: relative; */
    /* Consertado aqui */
    z-index: 1;
    right: 3px;
    height: 5%;
    /* right: 3px;
    height: 5%;
    z-index: 0; */
`
