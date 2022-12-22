import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 54px;
  height: 50px;
  background-color: grey;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 2px;
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
