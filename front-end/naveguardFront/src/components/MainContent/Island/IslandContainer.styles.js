import styled from "styled-components";

export const IslandContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    top: 30rem;

    @media (max-width: 650px) {
        top: 13rem;
    }
`

export const Beach = styled.div`
    position: relative;
    z-index: 1;
    right: 3px;
    height: 5%;

`
