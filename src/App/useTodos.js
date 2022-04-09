import React from 'react';
import {useLocalStorage} from './useLocalStorage';



function useTodos()
{

    const {
        item: todos, 
        saveItem: saveTodos, 
        sincronizeItem: sincronizeTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
    
      
      const [searchValue, setSearchValue] = React.useState(''); // Aqui se define el estado del search
      // const [todos, setTodos] = React.useState(defaultTodos); // Pertenece a  search
      // const completedTodos = todos.filter(todo => todo.completed == true).length; // Forma original de realizar la validación del search
      const [openModal, setOpenModal] = React.useState(false); // Indica que el modal inicia cerrado (false)
      const completedTodos = todos.filter(todo => !!todo.completed).length; // Forma reducida de realizar la validación (falso & falso da true) pertenece a search
      const totalTodos = todos.length; // Pertenece a counter
    
    //----------------------- Pertenece a Search ------------------------------
      
      let searchedTodos = [];
      
      if (searchValue.length >= 1)
      {
        searchedTodos = todos.filter(todo =>
          {
            const todoLC = todo.text.toLowerCase();
            const searchValueLC = searchValue.toLowerCase();
    
            return todoLC.includes(searchValueLC);
          });
      } 
      else 
      {    
        searchedTodos = todos; // Trae el text y el completed
      }
    
    //----------------------- Pertenece a Item ------------------------------
    
    // Función encargada de marcar como realizados los todos
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]; // se inyectan todos los todos (tareas) que teniamos antes (... significa todos)
        // newTodos[todoIndex].completed = true; // Solo marca si se completó
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // Conmuta entre completado o no
        saveTodos(newTodos);
      }; 

    // Función encargada de añadir un ToDo
    
    const addTodo = (text) => {
      const newTodos = [...todos]; // se inyectan todos los todos (tareas) que teniamos antes (... significa todos)
      // newTodos[todoIndex].completed = true; // Solo marca si se completó
      newTodos.push({
        comleted: false,
        text,
      });
      saveTodos(newTodos);
    }; 
    
    // Función encargada de eliminar los todos
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

    return{       

            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
            sincronizeTodos,

    };
}


export { useTodos };
