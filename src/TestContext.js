import React from 'react'
import Context from './Context';
import { useContext } from 'react'
const TestContext = () => {
    const {setBgColor,setParagraph} = useContext(Context);
    const bgClick = () => {
        setBgColor('lightgrey');
        setParagraph("This background is changed because of using context api");
    }
  return (
        <div>
            <h1>TestContext</h1>
            <button onClick={() => bgClick()}>Click me bro</button>
        </div>
  )
}

export default TestContext