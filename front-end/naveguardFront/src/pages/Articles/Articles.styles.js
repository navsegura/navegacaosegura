import styled from "styled-components";

export const PerguntasFrequentes = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;
`

export const Conteudo = styled.div`
    width: 100%;
    /* background-color: #101E43; */
    gap: 15px;
    flex-direction: column;
    display: flex;
    max-width: 100%;
`

export const Sumary = styled.summary`
    position: relative;
    padding-right: 10px; 
    cursor: pointer;
    font-size: 1rem;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding-top: 10px;
`

export const Details = styled.details`
    position: relative; 
    text-align: left;
    background-color: #101E43;
    width: 100%;
    border-radius: 1%;
    padding: 1rem;
    font-family: 'Poppins', sans-serif;
`
