import styled from "styled-components";

export const NotAvailable = styled.div`
display: none;

    @media (max-width: 375px) {
        display: block;
        width: 100vw;
        height: 100vh;
    
        & h1 {
            color: #FFF;
            font-size: 3rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`
