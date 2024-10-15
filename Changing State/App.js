import React from "react";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.down = this.down.bind(this);
        this.doubel = this.doubel.bind(this);
    }
    
    handleClick(){
        this.setState(preState=> {
            return{
                count: preState.count  + 1
            };
        })
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick = {this.handleClick}>Change!</button>
            </div>
        );
    }
    
}

export default App;