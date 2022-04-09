import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos, loading}) // va entre {} por que son las propiedades que en realidad son un objeto
{
    return(

        <h2 className = {`TodoCounter ${!!loading && "TodoCounter--loading"}`}>Has completado {completedTodos} de {totalTodos} TODO's</h2>
    );
}

export { TodoCounter };