import React from "react";
import ReactDOM from "react-dom";

function App(){
    const date = new Date();
    const hour = date.getHours();
    let timeDay ;
    
    if(hour < 12){
        timeDay = "GoodMorning";
    }else if(hour => 12 && hour > 17){
        timeDay = "Good Evening!"
    }else{
        timeDay = "Good Night"
    }
    return(
        <h1>{timeDay}</h1>
    );
}

ReactDOM.render(<App /> , document.getElementById("root"));