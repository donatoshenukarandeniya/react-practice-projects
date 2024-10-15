import React from "react";

function handCheck(){
    console.log("I was Clicked");
}

function handOver(){
    console.log("Hover");
}

function App(){
    return(
        <div>
            <img onMouseOver = {handOver} src = "https://www.centurypublishing.com/wp-content/uploads/2013/02/Good-Resolution-Image.jpg"/>
            <br/>
            <br/>
            <button onClick = {handCheck}>Click Me</button>
        </div>
    );
}

export default App;