import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    
    constructor() {
        super();
        this.state = {
            isLoggedIn: true
        };
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn 
        }));
    }
       
    render() {
        let buttonText = this.state.isLoggedIn ? "Log out" : "Log in";
        let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"; 
        
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h1>{displayText}</h1>
            </div>
        );
    }
}

export default App;
