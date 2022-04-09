import React from "react";
import "./AppUI.css";
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from '../Modal';
import { ChangeAlertWithStorageListener } from '../ChangeAlert/index';





function App() {

  const {    // Propiedades del value (destructuración del value)
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos, 
    searchValue, 
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();
  
  return(
    <React.Fragment>
        
        <TodoHeader loading = {loading}>

          <TodoCounter 
              totalTodos = {totalTodos}
              completedTodos = {completedTodos}
          />
          <TodoSearch 
              searchValue = {searchValue}
              setSearchValue = {setSearchValue}
          />

        </TodoHeader>

        <TodoList 
          error = {error}
          loading = {loading}
          searchedTodos = {searchedTodos}
          totalTodos = {totalTodos}
          searchText = {searchValue}

          onError = {() => (error && <p className = "pInformativoError">Hubo un error...</p>)}
          onLoading = {() => (loading && <p className = "pInformativoLoading">Estamos cargando, no desesperes...</p>)}    
          onEmptyTodos = {() => ((!loading && !searchedTodos.lenght) && <p className = "pInformativo">Crea tu primer ToDo!</p>)}
          onEmptySearchResults = {(searchText) => <p className="pInformativoResults">No hay resultados para {searchText}</p>}
          
// ------------------------------ ESTO ES UNA RENDER PROP: -----------------------------------------
          render = {todo => (
  
            <TodoItem 
                key = {todo.text} 
                text = {todo.text}
                completed = {todo.completed}
                onComplete = {() => completeTodo(todo.text)}
                onDelete = {() => deleteTodo(todo.text)}
            />
  
          )}
//-----------------------------------------------------------------------------------------------------
        >
{/* ------------------------------------ ESTO ES UNA RENDER FUNCTION: ---------------------------------- */}
          {/* {todo => (
    
          <TodoItem 
          key = {todo.text} 
          text = {todo.text}
          completed = {todo.completed}
          onComplete = {() => completeTodo(todo.text)}
          onDelete = {() => deleteTodo(todo.text)}
          />
  
          )} */}
{/* ------------------------------------------------------------------------------------------------*/}
          </TodoList>   

        

        {!!openModal && ( // Doble negación = true.
            <Modal>

                <TodoForm
                  addTodo = {addTodo} 
                  setOpenModal = {setOpenModal}
                />

            </Modal>
        )}

        <CreateTodoButton 
        
            openModal={ openModal }
            setOpenModal = { setOpenModal }
        
        />

        <ChangeAlertWithStorageListener sincronize={sincronizeTodos}/>

    </React.Fragment>
  );
}

export default App;
