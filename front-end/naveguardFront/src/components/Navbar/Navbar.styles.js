import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 1099;
  position: fixed;

  @media (max-width: 374px) {
        display: none;
    }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  flex-direction: row;

  @media (max-width: 1350px) {
    padding: 0 40px;
  }
`;

export const Navigation = styled.div`
    display: flex;
    flex-direction: row;
`

export const UserNavigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    font-family: 'Luckiest Guy', cursive;
`

export const Line = styled.div`
    height: 70px;
    margin-right: 1rem;
    border: 1px solid #D9D9D9;
`

export const UserPhoto = styled.img`
    width: 30px;
    border-radius: 50%;
`

export const NameProfile = styled.label`
  font-size: .8rem;
  cursor: pointer;

  @media (max-width: 470px) {
        display: none;
    };
`

export const DropDown = styled.nav`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const I = styled.i`
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 0.4s ease, opacity 0.4s ease;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(360deg)' : 'rotate(0deg)')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0.5')};
`

export const DropdownMenu = styled.div`
  position: absolute;
  top: 70%;
  background-color: white;
  border-radius: 10px 5px 10px 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  z-index: 100;
`;

export const DropdownItem = styled.div`
  font-size: .8rem;
  padding: 10px 20px;
  cursor: pointer;
`;

export const UserHover = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  
  &:hover {
    background-color: #EEEFF4;
    padding: .5rem 0;
    cursor: pointer;
  }
`

export const Logo = styled.h1`
  color: #004b8d;
  font-size: 20px;
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 2rem;
  font-size: .8rem;
`;

export const List = styled.li`
  border-bottom:  #f5f5f5 dashed 2px;
  color: #004b8d;

  &:hover {
    color: #FF6F00;
    transition: 1s ease-in-out;
    border-bottom: #004b8d dashed 2px;
  }
`;

export const ListTwo = styled.li`
  color: #F46A00;
  a:visited{
    color: #FF6F00;
  }
`

export const A = styled.a`
  color: #FF6F00;
`

export const LightMode = styled.img`
  right: 20px;
`;
