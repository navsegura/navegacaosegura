import styled from 'styled-components'

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 511px) {
        min-height: 100vh;
        height: 100%;
        align-items: normal;
        justify-content: normal;
    }

    `

export const UserGrid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    flex-wrap: wrap;
    padding: 90px 0 20px 0;
    gap: 2rem;
    margin-left: 80px;

    @media (max-width: 374px) {
        display: none;
    }
    `

export const UserCard = styled.div`
`

export const AddUserCard = styled.div`
`

export const ImageUser = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
`

export const Img = styled.img`
    width: 100%;
    border-radius: 200px;
    opacity: .7;
    cursor: pointer;
    transition: all .4s ease-in-out;
    &:hover {
        opacity: 1;
    }
`

export const AddMore = styled.div`
`

export const P = styled.p`
    text-align: center;
    font-size: 1.2rem;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
`

export const MoreIcon = styled.i`
    font-size: 2rem;
    color: #fff;
    border-radius: 100px;
    width: 200px;
    height: 200px;
    align-items: center;
    display: flex;
    cursor: pointer;
    justify-content: center;
    margin-bottom: 1.8rem;
    background-color: rgb(217, 217, 217, 50%);
    transition: all .4s ease-in-out;
    &:hover {
        background-color: rgb(217, 217, 217, 65%);
    }
`
