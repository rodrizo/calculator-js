import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { width } from '@mui/system';

export default function Calculator() {
    const [num, setNum] = useState(0)

    function inputNum(e) {
        var input = e.target.value
        if (num === 0) {
            setNum(input);
        }else{
            setNum(num + input);
        }
    }

    const clear = () => setNum(0);

    const percentage = () => setNum(num / 100);

    return (
        <>
            <Box m={5} />
            <Container maxWidth="xs">
                <div className='wrapper'>
                    <Box m={8} />

                    <h1 className='result'>{num}</h1>

                    <button className='gray' onClick={clear}>AC</button>
                    <button className='gray'>+/-</button>
                    <button className='gray' onClick={percentage}>%</button>
                    <button className='orange' >/</button>
                    <button className='digits' onClick={inputNum} value={7}>7</button>
                    <button className='digits' onClick={inputNum} value={8}>8</button>
                    <button className='digits' onClick={inputNum} value={9}>9</button>
                    <button className='orange'>X</button>
                    <button className='digits' onClick={inputNum} value={4}>4</button>
                    <button className='digits' onClick={inputNum} value={5}>5</button>
                    <button className='digits' onClick={inputNum} value={6}>6</button>
                    <button className='orange'>-</button>
                    <button className='digits' onClick={inputNum} value={1}>1</button>
                    <button className='digits' onClick={inputNum} value={2}>2</button>
                    <button className='digits' onClick={inputNum} value={3}>3</button>
                    <button className='orange'>+</button>
                    <button className='digits' style={{ width: "7em" }} onClick={inputNum} value={0}>0</button>
                    <button className='digits'>.</button>
                    <button className='orange'>=</button>
                </div>
            </Container>

        </>

    )
}
