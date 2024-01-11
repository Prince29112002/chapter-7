import React, {useRef} from 'react'
import User from './User'

function ForwardRef() {
    let inputRef=useRef(null);
    function updateInput()
    {
        inputRef.current.value ="3000"
        inputRef.current.style.color="red"
        inputRef.current.focus()
    }
    return (
        <>
        <h1>forwardRef in React</h1>
        <User ref={inputRef} />
        <button onClick={updateInput}>update InputBox</button>
        </>
    )
}
export default ForwardRef