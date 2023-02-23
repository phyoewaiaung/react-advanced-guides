import React, { useContext, useReducer, useState } from 'react'
import Context from './Context';

const TestReducer = () => {
    const {bgColor,setBgColor,paragraph} = useContext(Context);
    const [value, setValue] = useState("");
    const initialValue = {
        people: []
    }
    
    const reducer = (state,action) => {
        switch(action.type){
            case "INPUT_ADDED":
                const newPeople = [...state.people, action.payload];
                return {...state,people:newPeople};
            case "remove":
                let result = state.people.filter((d)=> {
                    return (
                        d.id !== action.payload
                    )
                })
                return {...state,people:result};
            default: return state;
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
        <h2>Learn useReducer Hook</h2><br />
        <form onSubmit={submitHandler}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder='enter text'/>
            <button type='submit'>submit</button>
        </form>
        <ul>    
            {state.people.map(person => {
                return <div key={person.id} style={{display:'flex',marginBottom:10}}>
                    <li style={{marginRight:20}} >{person.name}</li>
                    <button onClick={()=>dispatch({type:"remove",payload:person.id})}>remove</button>
                </div>
            })}
        </ul>
        <p>{paragraph}</p>
    </div>
  )
}

export default TestReducer