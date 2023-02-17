import React, {useState} from "react";
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

const App = () => {
  const[bgColor, setBgColor] = useState('');
  const[paragraph,setParagraph] = useState("");
  return (
      <Provider store={store}>
        <Context.Provider value={{bgColor,setBgColor,paragraph,setParagraph}}>
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
        </Context.Provider>
      </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
