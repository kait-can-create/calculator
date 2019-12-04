import React, { useState } from 'react'

const Calculator = () => {

  const [displayValue, setDisplayValue] = useState('')

  // pressing the buttons for numbers to display 'was pressed' message in console 
  const numberButtonPressed = digit => {
    console.log(digit, 'was pressed')
    setDisplayValue(prevValue => {
      return prevValue + digit.toString()
    })
  }

  const [operand, setOperand] = useState('')
  const [firstNumber, setFirstNumber] = useState(0)
  const operandButtonPressed = op => {
    console.log(op, 'was pressed')
    setOperand(op)
    // storing the current of the display in its own state
    setFirstNumber(displayValue)
    // resetting the display
    setDisplayValue('')
  }

  const calculateResult = () => {
    let total = 0
    // The Switch component makes sure that the first Route inside it that matches gets rendered, and stops there.
    // Case and break and like else/if
    switch (operand) {
      case '+':
        // add the numbers
        total = parseInt(firstNumber) + parseInt(displayValue)
        break
      case '-':
        // subtract the numbers
        total = parseInt(firstNumber) - parseInt(displayValue)
        break
      case '*':
        // mult the numbers
        total = parseInt(firstNumber) * parseInt(displayValue)
        break
      case '/':
        // divide the numbers
        total = parseInt(firstNumber) / parseInt(displayValue)
        break
    }
    setDisplayValue(total)
    // total = firstNumber (operand) display
  }

  const clearButton = () => {
    setDisplayValue('')
    setFirstNumber(0)
    setOperand('')
  }


  return (
    <>
      <div className="calculator">

        <section className="displayValue">
          <p>{displayValue}</p>
        </section>

        <div className="calculator-buttons">
          <button className="calc-button is-clear" onClick={clearButton}>C</button>
          <button className="calc-button is-divide" onClick={() => operandButtonPressed('/')}>&divide;</button>

          <button value="7" className="calc-button" onClick={() => numberButtonPressed(7)}>7</button>
          <button value="8" className="calc-button" onClick={() => numberButtonPressed(8)}>8</button>
          <button value="9" className="calc-button" onClick={() => numberButtonPressed(9)}>9</button>
          <button className="calc-button is-times" onClick={() => operandButtonPressed('*')}>&times;</button>

          <button value="4" className="calc-button" onClick={() => numberButtonPressed(4)}>4</button>
          <button value="5" className="calc-button" onClick={() => numberButtonPressed(5)}>5</button>
          <button value="6" className="calc-button" onClick={() => numberButtonPressed(6)}>6</button>
          <button className="calc-button is-minus" onClick={() => operandButtonPressed('-')}>&minus;</button>

          <button value="1" className="calc-button" onClick={() => numberButtonPressed(1)}>1</button>
          <button value="2" className="calc-button" onClick={() => numberButtonPressed(2)}>2</button>
          <button value="3" className="calc-button" onClick={() => numberButtonPressed(3)}>3</button>
          <button className="calc-button is-plus" onClick={() => operandButtonPressed('+')}>&#43;</button>



          {/* why does this work to display the value as the integer 0 on the calculator? */}
          <button className="calc-button" onClick={() => numberButtonPressed(0)}>0</button>

          {/* But this does not work? The value is being assigned directly with value="0"?:
          <button value="0" className="calc-button" onClick={numberButtonPressed}>0</button> */}

          <button className="calc-button is-equals operator-button" onClick={calculateResult} >&#61;</button>
        </div>
      </div>

    </>
  )
}

export default Calculator
