import React, { useContext, useReducer, useState } from 'react'
import Context from './Context';

const TestReducer = () => {
    const {bgColor,setBgColor,paragraph} = useContext(Context);
    const [value, setValue] = useState("");
    const initialValue = {
        people: []
    }
    
    const reducer = (state,action) => {
        if(action.type === "INPUT_ADDED"){
            const newPeople = [...state.people, action.payload];
            return {...state,people:newPeople};
        }
    }
    const[state,dispatch] = useReducer(reducer,initialValue);
    function submitHandler(e) {
        e.preventDefault();

        const newItem = {id:Math.random().toString(), name:value}
        dispatch({type:"INPUT_ADDED",payload:newItem});
        setValue("");
    }
  return (
    <div style={{backgroundColor:bgColor}}> 
        <h1>Learn Reducer Hook</h1><br />
        <form onSubmit={submitHandler}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder='enter text'/>
            <button type='submit'>submit</button>
        </form>
        <ul>    
            {state.people.map(person => {
                return <li key={person.id}>{person.name}</li>
            })}
        </ul>
        <p>{paragraph}</p>
    </div>
  )
}

export default TestReducer