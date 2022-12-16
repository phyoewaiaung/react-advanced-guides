import React from "react";
import ReactDOM from 'react-dom/client';
import ErrorBoundary from "./ErrorBoundary";
import TestErrorBoundary from "./TestErrorBoundary";
import TicTacToe from "./TicTacToe";
import './index.css';

// ========================================

const App = () => {
  return (
      <>
        <TicTacToe />
        <hr />
      <ErrorBoundary>
        <TestErrorBoundary />
      </ErrorBoundary>
      </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
