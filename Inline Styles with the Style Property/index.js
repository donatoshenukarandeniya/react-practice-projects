import React from "react";
import ReactDOM from "react-dom";

function App(){
    
    const date = new Date();
    const hour = date.getHours();
    let timeDay; 
    const styles = {
        fontSize : 30
    }
    
    if(hour < 12){
        timeDay = "Morning";
        styles.color = "#87CEEB"
    }else if(hour => 12 && hour > 17){
        timeDay = "Evening";
        styles.color = "#DDA0DD"
    }else{
        timeDay = "Night";
        styles.color = "#191970"
    }
    
    return(
    <h1 style = {styles}>Good {timeDay}!</h1>
    );
}

ReactDOM.render(<App /> , document.getElementById("root"));