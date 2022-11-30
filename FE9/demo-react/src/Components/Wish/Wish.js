import React, { useEffect, useState } from 'react'

function Wish() {

const [flag, setFlag] = useState(false)
let [a, changeA] = useState(0)

const changeText = (n) => {
    // a++
    changeA(a + n)
    console.log(a)
    if (a % 5 === 0){
      setFlag(!flag)
      console.log('flag changed')
    }
}

useEffect(() => {
  console.log('Inside use effect')
  return ( ()=>{
    console.log('Return statement');
 });
}, [a])



  return (
    <div style = {{border: '1px solid black'}}>
        <div> {a}</div>
        <button onClick={() => changeText(1)}>Click to Increment</button>
    </div>
  )
}

export default Wish