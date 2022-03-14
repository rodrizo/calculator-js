import React from 'react'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { width } from '@mui/system';

export default function Calculator() {
    return (
        <>
            <Box m={5} />
            <Container maxWidth="xs">
                <div className='wrapper'>
                    <button className='gray'>AC</button>
                    <button className='gray'>+/-</button>
                    <button className='gray'>%</button>
                    <button className='orange'>/</button>
                    <button className='digits'>7</button>
                    <button className='digits'>8</button>
                    <button className='digits'>9</button>
                    <button className='orange'>X</button>
                    <button className='digits'>4</button>
                    <button className='digits'>5</button>
                    <button className='digits'>6</button>
                    <button className='orange'>-</button>
                    <button className='digits'>1</button>
                    <button className='digits'>2</button>
                    <button className='digits'>3</button>
                    <button className='orange'>+</button>
                    <button className='digits' style={{width:"7em"}}>0</button>
                    <button className='digits'>.</button>
                    <button className='orange'>=</button>
                </div>
            </Container>

        </>

    )
}
