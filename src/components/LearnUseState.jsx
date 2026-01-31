import React, { useState } from 'react'

const LearnUseState = () => {
    const [color, setColor] = useState('Red');

    return (
        <div>
            <h1>UseState</h1>
            <h1>My faviourt color is {color}</h1>
            <button>Its ok</button>
            <button type='button' onClick={() => setColor('Blue')}>Click me</button>
            <button type='button' onClick={() => setColor('Green')}>Click Green</button>
            <button type='button' onClick={() => setColor('Yellow')}>Click Yellow</button>
            <button type='button' onClick={() => setColor('Orange')}>Click Orange</button>
            <button type='button' onClick={() => setColor('Brown')}>Click Brown</button>
        </div>
    )
}

export default LearnUseState;
