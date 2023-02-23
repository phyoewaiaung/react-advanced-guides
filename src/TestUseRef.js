import React,{ useContext, useRef} from 'react'
import Context from './Context';

function TestUseRef(props) {
  let {colorRef,colorClick} = props;
    const{setText} = useContext(Context);
    const inputRef = useRef(null);
    const submit = () => {
        setText(inputRef.current.value);
        alert(inputRef.current.value)
    }
  return (
    <div>
      <h2> Learn useRef Hook</h2>
      <form onSubmit={submit}>
      <input type="text" ref={inputRef} placeholder='Enter Text'></input>
      <button type='submit'>Submit</button>
      </form>
      <br></br>
      <br></br>
      <form onSubmit={colorClick}>
      <input type="text" ref={colorRef} placeholder='Enter Text'></input>
      <button type='submit'>Color</button>
       *** This color will effect all form ***
      </form>
    </div>
  )
}

export default TestUseRef
