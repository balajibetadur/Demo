import React, { useRef } from 'react'

// It can be used to access a DOM element directly.
// The useRef Hook allows you to persist values between renders.
function Welcome() {

  const inputRef = useRef()

  function handleRef(){
    console.log(inputRef.current.innerHTML)
    // inputRef.current.value = 'Focus button CLicked!!!'
  }

  return (
    <div>
      <input type="text" />
      <p ref = {inputRef}>I am paragraph!!</p>
      <button onClick={handleRef}>Focus</button>
    </div>
  )
}

export default Welcome