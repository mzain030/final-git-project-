import React, { useState } from 'react'

const Counting = () => {
  const [color, setColor] = useState('pink');
 
  return (
    <div>
     <h1>123</h1>
     <h2>aadhded</h2>
     <h3>endcjsvdf</h3>
     <h3>Abdullah</h3>
     <h4>ncvjsfvjsd</h4>
      <button type='button' onClick={() => setColor('Yellow')}>Click Yellow</button>
            <button type='button' onClick={() => setColor('Orange')}>Click Orange</button>
            <button type='button' onClick={() => setColor('Brown')}>Click Brown</button>
    </div>
  )
}

export default Counting