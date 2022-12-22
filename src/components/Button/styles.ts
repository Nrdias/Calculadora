import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 50px;
  height: 50px;
  background-color: grey;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 2px;
  box-shadow: 0 0 3px 3px grey;
  &:hover {
    background-color: white;
    transition: all ease 0.3s;
    border: solid 1px black;
  }
  &:active {
    scale: 0.9;
    transition: all ease 0s;
  }

`
