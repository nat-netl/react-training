import React, { useState } from 'react'

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("Hey");

  const increment = () => {
    setCounter (counter + 1);
  }

  const decrement = () => {
    setCounter (counter - 1);
  }

  return (
    <div> 
        <h1>{counter}</h1>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <h2>{value}</h2>
        <input type="text" value={value} onChange={ event => setValue(event.target.value)}/>

    </div>
  )
}
