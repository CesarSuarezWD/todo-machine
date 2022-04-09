import React from 'react';
import './TodoSearch.css';

function TodoSearch ({ searchValue, setSearchValue, loading })
{
    
    // const [searchValue, setSearchValue] = React.useState(''); // Esto es un estado
    const onSearchValueChange = (event) => {
        // console.log(event);
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return( 
        
        <input // Esta es la caja de texto de busqueda
            className = "TodoSearch" 
            placeholder = "Search..." 
            value = {searchValue}
            onChange = { onSearchValueChange }
            disabled = {!!loading}
        />
    );
}
export { TodoSearch };