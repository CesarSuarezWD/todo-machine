import React from 'react';

function useLocalStorage (itemName, initialValue){

    const [error, setError] = React.useState(false);
  
    const [loading, setLoading] = React.useState(true);
  
    const [item, setItem] = React.useState(initialValue); // Pertenece a  search
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if(!localStorageItem) // ! Indica si el localstorage esta vacio, null, false, etc.
          {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }
          else
          {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 1000)
    }, []);
  
  
    //------------Función de transición para complete y delete---------------
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    return{ // Por convención de React, cuando se tienen mas de dos estados, se cambia el array [], por un objeto {}. Inicialmente tenia item y saveItem, y se le agrego loading, por ende cambia la sintaxis
      item,
      saveItem,
      loading,
      error,
    };
  
  }

export {useLocalStorage};