import React , {Component} from "react";

class App extends React.Component{
    
    constructor(){
        super();
        this.state = {
            name : "Shenuka",
            age : 21
        };
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} yeas old</h3>
            </div>
        );
    }
}

export default App;