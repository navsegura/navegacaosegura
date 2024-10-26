import styled from 'styled-components'

export const ErrorContainer = styled.div`
    /* border: red 1px solid; */
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ErrorContent = styled.div`
    /* border: red 1px solid; */
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Img = styled.img`
    z-index: 1000;
    width: 50rem;
    margin-top: 2rem;
`

export const Sea = styled.div`
    /* border: green 1px solid; */
    position: absolute;
    top: 77%;
    z-index: 200;
    width: 100%;
    height: 600px;
    background-color: #116AB9;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Return = styled.button`
    margin-top: 12rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 20rem;
    height: 4rem;
    align-items: center;
    border-radius: 4px;

    &:hover {
        background-color: #D47E3B;
    }
`

export const Loading = styled.div`
    width: 100vw;
    height: 100vh;
    border: 1px red solid;
    display: flex;
    align-items: center;
    justify-content: center;
`
