import React from 'react'
import { IButton } from './types'
import { ButtonContainer } from './styles'

const Button = ({ value, onClick }: IButton) => {
  return (
    <>
      <ButtonContainer onClick={onClick}>
        {value}
        </ButtonContainer>
    </>
  )
}

export { Button }
