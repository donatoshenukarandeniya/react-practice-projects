import React from "react"
import ReactDOM from "react-dom"

function MyInfo(){
    return(
        <ul>
            <li><h1>Shenuka</h1></li>
            <li><p>Im React Developer</p></li>
            <li><ol>
                    <li>Matale</li>
                    <li>Matara</li>
                    <li>NuwaraEliya</li>
                </ol>
            </li>
        </ul>
    );
}

ReactDOM.render(<MyInfo/> , document.getElementById("root"))