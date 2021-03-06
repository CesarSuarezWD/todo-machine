import React from 'react';
import './TodoItem.css';

function TodoItem(props) {


  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick = {props.onComplete}
      >
        {/* √ */}
        <img alt= "Check" src="https://img.icons8.com/ios-glyphs/50/000000/checked--v1.png"/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
        onClick = {props.onDelete}
      >
        {/* X */}
        <img alt = "Delete" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/32/000000/external-delete-multimedia-kiranshastry-solid-kiranshastry.png"/>
      </span>
    </li>
  );
}

export { TodoItem };