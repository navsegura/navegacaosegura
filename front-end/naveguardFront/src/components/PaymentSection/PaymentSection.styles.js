import styled from "styled-components";

export const PapiroContainer = styled.div`
  position: relative;
  display: inline-block;

  & img {
    display: block;
    width: 40px;
    height: auto;
  }
`

export const PapiroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  background: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`

export const BtnPapiro = styled.button`
  padding: 8px 12px;
  border: none;
  background-color: #3d4a6a;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2c3750;
  }
`
