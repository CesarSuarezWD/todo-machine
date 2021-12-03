import React from 'react';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import './AppUI.css';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI ()

{
    
 const {    error, // Propiedades del value (destructuración del value)
            loading, 
            searchedTodos, 
            completeTodo, 
            deleteTodo,
            openModal,
            setOpenModal,
        } = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter />

            <TodoSearch />

            <TodoList>

            {error && <p className = "pInformativoError">Hubo un error...</p>}

            {loading && <p className = "pInformativoLoading">Estamos cargando, no desesperes...</p>}
            {/* La && signifca que es true (si loading es true, entonces...) */}

            {(!loading && !searchedTodos.lenght) && <p className = "pInformativo"></p>}
            {/* El && en el primer caso significa "and" y en el segundo caso significa "entonces". El "!" significa no. */}

                {searchedTodos.map(todo => (

                <TodoItem 
                    key = {todo.text} 
                    text = {todo.text}
                    completed = {todo.completed}
                    onComplete = {() => completeTodo(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                />

                ))}
            </TodoList>

            {!!openModal && ( // Doble negación = true.
                <Modal>

                    <TodoForm />

                </Modal>
            )}

            <CreateTodoButton 
            
                setOpenModal = { setOpenModal }
            
            />
 
        </React.Fragment>
    );
}

export { AppUI };