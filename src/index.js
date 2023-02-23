import React, {useRef, useState} from "react";
import ReactDOM from 'react-dom/client';
import ErrorBoundary from "./ErrorBoundary";
import TestErrorBoundary from "./TestErrorBoundary";
import TicTacToe from "./TicTacToe";
import TestReducer from "./TestReducer";
import TestContext from "./TestContext";
import Context from './Context'
import { store } from "./store";
import { Provider } from "react-redux";
import TestRedux from "./TestRedux";
import './index.css';
import TestUseRef from "./TestUseRef";
import ChildToParent from "./ChildToParent";

const App = () => {
  const colorRef = useRef(null);
  const[bgColor, setBgColor] = useState('');
  const[paragraph,setParagraph] = useState("");
  const[text,setText] = useState("");
  const[color,setColor] = useState("");
  const callback = payload => {
    alert(payload)
  }

  const colorClick = (e) => {
    e.preventDefault();
    setColor(colorRef.current.value);
  }
  return (
      <Provider store={store}>
        <Context.Provider value={{bgColor,setBgColor,paragraph,setParagraph,text,setText,colorRef}}>
          <div style={{color:color?color:"darkblue"}}>
            <TicTacToe />
            <hr />
              <ErrorBoundary>
                <TestErrorBoundary />
              </ErrorBoundary>
            <hr />
              <TestReducer />
            <hr />
              <TestContext />
            <hr />
              <TestRedux />
            <hr />
              <TestUseRef colorRef={colorRef} colorClick={colorClick}/>
            <hr />
              <ChildToParent callback={callback}/>
            <hr />
          </div>
        </Context.Provider>
      </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
