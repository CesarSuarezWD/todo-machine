import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() // va entre {} por que son las propiedades que en realidad son un objeto
{
    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return(

        <h2 className = "TodoCounter">Has completado {completedTodos} de {totalTodos} TODO's</h2>
    );
}

export { TodoCounter };