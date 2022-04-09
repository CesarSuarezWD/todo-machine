import React from 'react';
import './TodoForm.css';

function TodoForm ({ addTodo, setOpenModal }) {

    const [newTodoValue, setNewTodoValue] = React.useState('');


    const onChange = (event) => {
        
        setNewTodoValue (event.target.value);
    }

    const onCancel = () => {
        
        setOpenModal(false);

    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(newTodoValue.length <= 0)return;
         
        addTodo(newTodoValue); 
        
        setOpenModal(false);
    };

    return(
        <form onSubmit={onSubmit}>

            <label>Escribe tu nuevo ToDo!!</label>

            <textarea 
                value = {newTodoValue}
                onChange = {onChange}
                placeholder = "Cortar la cebolla para el almuerzo"
            />

            <div className = "TodoForm-buttonContainer"> 
                {/* <button className = "TodoForm-button TodoForm-button--cancel" type = "button" onClick = {onCancel}> */}
                <button className = "TodoForm-button TodoForm-button--cancel" type = "button" onClick = {onCancel}>
                    Cancelar
                </button>

                {/* <button className = "TodoForm-button TodoForm-button--add" type = "submit"> */}
                <button className = "TodoForm-button TodoForm-button--add" type = "submit">
                    Añadir
                </button>
            </div>
            

        </form>
    );
}

export { TodoForm };