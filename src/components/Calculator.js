import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { width } from '@mui/system';

export default function Calculator() {
    //useState in order to set the number
    const [num, setNum] = useState(0);
    //this helps to do operations, it'll set the first num in other variable
    const [oldNum, setOldNum] = useState(0);
    //this saves the operator
    const [operator, setOperator] = useState(0);


    //set the clicked numbers on the screen
    const inputNum = (e) => {
        const input = e.target.value;

        const data = (num === 0) ? setNum(input) : setNum(num + input);
    }

    //AC button
    const clear = () => setNum(0);

    //% button
    const percentage = () => setNum(num / 100);

    //+/- button
    const changeSign = () => {
        
        const change = (num > 0) ? setNum(-num) : setNum(Math.abs(num));
        
    }

    //function in order to set the operator, the old num and the new number, to create operations
    const operatorHandler = (e) => {
        const operator = e.target.value;
        setOperator(operator);
        setOldNum(num);
        setNum(0);
         
    }

    //calculating
    const calculate = () => {

        const value = (operator === "/") && (num !== "0") ? setNum((parseFloat(oldNum) / parseFloat(num)).toFixed(4))
        : (operator === "/") && (num === "0") ? setNum('Error')
        : (operator === "x") ? setNum((parseFloat(oldNum) * parseFloat(num)).toFixed(4))
        : (operator === "-") ? setNum((parseFloat(oldNum) - parseFloat(num)).toFixed(4))
        : (operator === "+") ? setNum((parseFloat(oldNum) + parseFloat(num)).toFixed(4))
        : 0;

    }

    return (
        <>
            <Box m={5} />
            <Container maxWidth="xs">
                <div className='wrapper'>
                    <Box m={8} />

                    <h1 className='result'>{num}</h1>

                    <button className='gray' onClick={clear}>AC</button>
                    <button className='gray' onClick={changeSign}>+/-</button>
                    <button className='gray' onClick={percentage}>%</button>
                    <button className='orange' onClick={operatorHandler} value="/">÷</button>
                    <button className='digits' onClick={inputNum} value={7}>7</button>
                    <button className='digits' onClick={inputNum} value={8}>8</button>
                    <button className='digits' onClick={inputNum} value={9}>9</button>
                    <button className='orange' onClick={operatorHandler} value="x">x</button>
                    <button className='digits' onClick={inputNum} value={4}>4</button>
                    <button className='digits' onClick={inputNum} value={5}>5</button>
                    <button className='digits' onClick={inputNum} value={6}>6</button>
                    <button className='orange' onClick={operatorHandler} value="-">-</button>
                    <button className='digits' onClick={inputNum} value={1}>1</button>
                    <button className='digits' onClick={inputNum} value={2}>2</button>
                    <button className='digits' onClick={inputNum} value={3}>3</button>
                    <button className='orange' onClick={operatorHandler} value="+">+</button>
                    <button className='digits' style={{ width: "7em" }} onClick={inputNum} value={0}>0</button>
                    <button className='digits' onClick={inputNum} value={'.'}>.</button>
                    <button className='orange' onClick={calculate} value="=">=</button>
                </div>
            </Container>

        </>

    )
}
