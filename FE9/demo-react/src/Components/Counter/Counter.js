import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {counterActions} from '../../State/Actions'
import { increment, decrement } from '../../State/Actions/CounterActions'

function Counter() {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    // console.log(counterActions)

  return (
    <div>
        <p>{counter}</p>
        <button onClick={() => dispatch(increment(5))} >Increment</button>
        <button onClick={() => dispatch(decrement(5))} >Decrement</button>

    </div>
  )
}

export default Counter