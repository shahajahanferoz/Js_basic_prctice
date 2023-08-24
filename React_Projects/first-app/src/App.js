import React from 'react';
import './styles.css'
import TodoList from "./components/TodoList";
import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div>
      <TodoList />
      {/* <MuiTypography /> */}
    </div>
  );
}

export default App;

