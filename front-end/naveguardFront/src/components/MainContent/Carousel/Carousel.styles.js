import styled from "styled-components";

export const ContainerMain = styled.div`
    display: flex;
    justify-content: center;
    margin: 15rem 0 15rem 0;

    @media (max-width: 374px) {
        display: none;
    }
`

export const ContainerSlide = styled.div`
    width: 55%;
    
    .swiper-pagination-bullet {
    border: 2px solid white;
    background-color: transparent;
    width: 0.7rem;
    height: 0.7rem;
  }
`
