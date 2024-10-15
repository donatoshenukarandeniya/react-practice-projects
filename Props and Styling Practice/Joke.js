import React from "react";
// import "./index.css";

function Joke(props){
    return(
        <div>
            <h3 style = {{display : !props.quection && "none"}}>Quection : {props.quection}</h3>
            <h3 style = {{color : !props.quection && "#888888"}}>Answer : {props.answer}</h3>
            <hr/>
        </div>
    );
}

export default Joke;