import React from 'react';
import "./ChangeAlert.css";
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }){

    if(!!show){
        
        return(
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>

                    <p>Parece que cambiaste tus TODO's en otra pestaña o ventana del navegador!</p>
                    <p>¿Quieres sincronizar tus TODO's?</p>

                    <button className='TodoForm-button' onClick={() => toggleShow(false)}>

                        Yes!
                        
                    </button>

                </div>
            </div>
        );

    }
    
    else{
        return null;
    }
    
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };