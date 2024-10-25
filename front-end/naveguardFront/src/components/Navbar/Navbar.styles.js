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

export const Logo = styled.h1`
  color: #004b8d;
  font-size: 20px;
`;

export const MenuList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2rem;
  margin-left: auto;
  padding-right: 7rem;
`;

export const List = styled.li`
  text-decoration: none;
  color: #004b8d;
`;

export const LightMode = styled.img`
  right: 20px;
`;
