import styled from "styled-components";

export const H1 = styled.h1`
    margin-bottom: 25px;
    letter-spacing: .2rem;
`

export const Conteudo = styled.div`
    width: 70%;
    gap: 15px;
    flex-direction: column;
    display: flex;
    max-width: 100%;
`

export const Details = styled.details`
    position: relative; 
    text-align: left;
    background: linear-gradient(to right, #3EABEE 0%, #289BEB 50%, #118BE9 100%);
    width: 100%;
    border-radius: 1%;
    padding: 1rem;
    font-family: 'Poppins', sans-serif;
`

export const Summary = styled.summary`
    position: relative;
    padding-right: 10px; 
    cursor: pointer;
    font-size: 1rem;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding-top: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
`
