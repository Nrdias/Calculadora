import React, {useState} from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { DivStyle, Calc, Container } from './global';

function App() {

  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (number: string) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
    
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const calc = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(calc))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const calc = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(calc))
      setOperation('')
    }

  }

  const handleDivideNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const calc = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(calc))
      setOperation('')
    }

  }

  const handleMultiplNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const calc = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(calc))
      setOperation('')
    }

  }
  
  const handlePotencyNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('^')
    }else {
      const calc = Math.pow(Number(firstNumber),Number(currentNumber))
      setCurrentNumber(String(calc))
      setOperation('')
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers(); 
            break;
          case '/':
            handleDivideNumbers();
            break;
          case '*':
            handleMultiplNumbers();
            break;
          case '^':
            handlePotencyNumbers();
            break;
          default:
            break;
        }
    }

  }
  
  return (
    <Container>
      <Calc>
        <Input value={currentNumber}></Input>
        <DivStyle>
        <Button value={'C'} onClick={handleOnClear}></Button>
        <Button value={'/'} onClick={handleDivideNumbers}></Button>
        <Button value={'*'} onClick={handleMultiplNumbers}></Button>
        <Button value={'+'} onClick={handleSumNumbers}></Button>
        <Button value={'-'} onClick={handleMinusNumbers}></Button>
        <Button value={'='} onClick={handleEquals}></Button>
        <Button value={'^'} onClick={handlePotencyNumbers}></Button>
        <Button value={'9'} onClick={() => handleAddNumber('9')}></Button>
        <Button value={'.'} onClick={() => handleAddNumber('.')}></Button>
        <Button value={'8'} onClick={() => handleAddNumber('8')}></Button>
        <Button value={'7'} onClick={() => handleAddNumber('7')}></Button>
        <Button value={'6'} onClick={() => handleAddNumber('6')}></Button>
        <Button value={'5'} onClick={() => handleAddNumber('5')}></Button>
        <Button value={'4'} onClick={() => handleAddNumber('4')}></Button>
        <Button value={'3'} onClick={() => handleAddNumber('3')}></Button>
        <Button value={'2'} onClick={() => handleAddNumber('2')}></Button>
        <Button value={'1'} onClick={() => handleAddNumber('1')}></Button>
        <Button value={'0'} onClick={() => handleAddNumber('0')}></Button>
        </DivStyle>
      </Calc>
    </Container>
  )
}

export default App
