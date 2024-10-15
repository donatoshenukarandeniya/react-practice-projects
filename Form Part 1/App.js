import React , {Component} from "react";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName : "" , 
            lastName : ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {name , value} = event.target
        this.setState({
            [name] : value
        })
    }
    
    render() {
        return(
            <form>
                <input  
                    name = "firstName" 
                    value = {this.state.firstName}
                    type = "text" 
                    placeholder = "firstname" 
                    onChange = {this.handleChange}
                />
                
                <input  
                    name = "lastName" 
                    value = {this.state.lastName}
                    type = "text" 
                    placeholder = "firstname" 
                    onChange = {this.handleChange}
                />
                
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>    
        );
    }
    
}



export default App;