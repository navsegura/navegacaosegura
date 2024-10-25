import styled from 'styled-components'

export const Container = styled.section`
    width: 100vw;
    height: 92vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: red solid 1px; */
`

// export const ReturnButton = styled.i`
//     /* border: red solid 1px; */
//     font-size: 1.5rem;
//     position: relative;
//     bottom: 4rem;
// `

export const UserGrid = styled.div`
    /* border: green solid 10px; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`

export const UserCard = styled.div`
    /* border: blue solid 1px; */
`

export const AddUserCard = styled.div`
    /* border: blue solid 1px; */
`

export const ImageUser = styled.div`
    width: 200px;
    /* border: blue solid 1px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
`

export const Img = styled.img`
    width: 100%;
    border-radius: 200px;
    /* border: blue solid 1px; */
    opacity: .7;
    cursor: pointer;
    /* margin-bottom: .5rem; */
    transition: all .4s ease-in-out;
    &:hover {
        opacity: 1;
        /* transform: scale(1.02); */
    }
`

export const AddMore = styled.div`
    /* border: orange solid 1px; */
`

export const P = styled.p`
    /* border: orange solid 1px; */
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
