import React from "react";

function TodoItem(props){
    
    const completedStyle = {
        fontStyle : "italic" , 
        color : "#cdcdcd" , 
        textDecoration : "line-through"
    }
    
    return(
        <div className = "todoitem">
            <input 
                onChange = {() => props.handelChange(props.item.id)} 
                type = "checkbox" 
                checked = {props.item.completed}
            />
            <p style = {props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>
    );
}

export default TodoItem;