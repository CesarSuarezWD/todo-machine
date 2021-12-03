import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Tomar el curso de intro a React', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
//   {text: 'Lalalala', completed: false},
// ];



function App() {
  
  return (
    <TodoProvider>

      <AppUI />
      
    </TodoProvider>
  );
}

export default App;
