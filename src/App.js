import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, changeCustomVal } from './firstSice'

function App() {
    const {value, customValue} = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <div className="wrapper">
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                {value}
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <input type="text" onChange={(event)=>{
                    const value = event.target.value
                    dispatch(changeCustomVal(value))
                }}/>
                <h1>{customValue}</h1>
            </div>
        </div>
    );
}

export default App;
