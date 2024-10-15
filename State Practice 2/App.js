import React , {Component} from "react";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoggedIn : false
        }
    }
    render(){
        
        let attend;
        if(this.state.isLoggedIn == true){
            attend = "in";
        }else{
            attend = "out";
        }
        
        return(
        <div>
            <h1>You are currently logged {attend}</h1>
        </div>
    );
    }
    
}

export default App;