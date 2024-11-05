import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 1000;
  position: fixed;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  max-width: 1800px;
  width: 100%;
  flex-direction: row;
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
`

export const Line = styled.div`
    height: 8vh;
    margin-right: 1rem;
    border: 1px solid #D9D9D9;
`

export const UserPhoto = styled.img`
    width: 30px;
    border-radius: 50%;
`

export const NameProfile = styled.label`
  font-size: .8rem;
`

export const DropDown = styled.nav`
    /* border: red solid 1px; */
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const I = styled.i`
    font-size: 1.2rem;
`

export const Logo = styled.h1`
  color: #004b8d;
  font-size: 20px;
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 2rem;
  margin-left: auto;
  padding-right: 7rem;
  /* border: red solid 1px; */
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

export const A = styled.a`
  color: #FF6F00;
`

export const LightMode = styled.img`
  right: 20px;
`;
