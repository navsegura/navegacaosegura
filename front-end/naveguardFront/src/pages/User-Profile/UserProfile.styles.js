import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MainContainer = styled.div`
    /* border: red solid 1px; */
    padding: 8vh 0 0 4vw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        padding: 10vh 0 0 2vw;
    }

    @media (max-width: 480px) {
        padding: 8vh 0 0 1vw;
    }
`

export const Strong = styled.strong`
  font-weight: bold;
  color: #2c2c2c;
`

export const UserProfileContent = styled.div`
    padding: 5vh;
    max-width: 1700px;
    /* border: red solid 1px; */
    background-color: #f5f5f5;

    width: 100%;

    @media (max-width: 1024px) {
        padding: 3vh;
    }

    @media (max-width: 768px) {
        padding: 2vh;
    }
`

export const Profile = styled.div`
    display: flex;
    font-family: "Luckiest Guy", cursive;
    font-weight: 400;
    gap: 5rem;
    color: #2c2c2c;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 2rem;
    }

    @media (max-width: 768px) {
        gap: 1.5rem;
    }
`

export const UserImage = styled.div`
    width: 450px;
    height: 200px;
    border-radius: 50%;

`

export const Photo = styled.img`
border-radius: 100%;
    width: 100%;
`

export const Line = styled.div`
    width: 100%;
    border: 1px solid #D9D9D9;
    margin-top: 3rem;

    @media (max-width: 768px) {
        margin-top: 2rem;
    }
`

export const About = styled.div`
/* border: red solid 1px; */
`

export const Span = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: #000;
    @media (max-width: 768px) {
        gap: 0.1rem;
    }
`

export const NameProfile = styled.h1`
    color: #2c2c2c;
    letter-spacing: .1rem;
`

export const Icon = styled.i`
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`

export const Info = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.5rem;
    }
`

export const Bio = styled.div`
    font-family: 'Poppins', sans-serif;
    padding: 1rem;

    @media (max-width: 768px) {
        padding: 0.5rem;
    }
`

export const Location = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    gap: 0.2rem;

    @media (max-width: 768px) {
        gap: 0.1rem;
    }
`

export const Edit = styled.i`
    border: solid 1px #D9D9D9;
    border-radius: 50%;
    font-size: 1.5rem;
    width: 4rem;
    height: 2.4rem;
    cursor: pointer;
    transition: transform 0.4s ease, opacity 0.4s ease;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(360deg)' : 'rotate(0deg)')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0.5')};

    @media (max-width: 768px) {
        font-size: 1.2rem;
        width: 3rem;
        height: 2rem;
    };
`

export const Input = styled.input`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    height: 2rem;
    padding-left: 0.3rem;

    @media (max-width: 768px) {
        height: 1.8rem;
        padding-left: 0.2rem;
    }
`

export const DropdownMenu = styled.div`
  position: absolute;
  right: 10%;
  background-color: white;
  border-radius: 10px 5px 10px 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  z-index: 100;

  @media (max-width: 768px) {
    right: 16rem;
  }
`;

export const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #EEEFFF;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

export const MainContent = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        padding: 4vh 0 0 2vw;
    }
`

export const UserProfileContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    padding: 5vh;
    margin: 0 0 5rem 4vw;
    max-width: 1700px;
    /* border: red solid 1px; */
    background-color: #F5F5F5;
    width: 100%;

    @media (max-width: 768px) {
        padding: 3vh 3vw;
    }
`

export const FindOutMore = styled.h2`
    color: #828181;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`

export const GroupSquare = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        gap: 1rem;
    }
`

export const Square = styled.div`
    max-width: 230px;
    width: 13vw;
    max-height: 280px;
    height: 12vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    background-color: #101E43;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 0 2rem;

    &:hover {
        transform: scale(1.04);
    }

    @media (max-width: 768px) {
        width: 30vw;
        height: 30vw;
        gap: 0.5rem;
    }
`

export const Graphics = styled.p`
    font-size: 1.2rem;
    font-weight: 600;
    color: #FFFFFF;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

export const IconElements = styled.i`
    font-size: 5rem;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 4rem;
    }
`

export const P = styled.p`
    font-size: .6rem;
    color: #FFFFFF;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`

export const Next = styled.i`
    font-size: 2rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`