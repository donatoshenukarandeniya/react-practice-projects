import React , {Component} from "react";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName : "" , 
            lastName : "" ,
            isFriendly : true , 
            gender : "" , 
            favColor : "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {name , value , type , checked} = event.target
       type === "checkbox" ? this.setState({[name] : checked}) : this.setState ({ [name] : value })
    }
    
    handleSubmit(){
        
    }
    
    render() {
        return(
            <form onSubmit = {this.handleChange}>
                <input  
                    name = "firstName" 
                    value = {this.state.firstName}
                    type = "text" 
                    placeholder = "firstname" 
                    onChange = {this.handleChange}
                />
                <br/>
                <input  
                    name = "lastName" 
                    value = {this.state.lastName}
                    type = "text" 
                    placeholder = "firstname" 
                    onChange = {this.handleChange}
                />
                <br/>
                <textarea value = "some default value"/>
                <br/>
                <label>
                    <input 
                    type="checkbox" 
                    name = "isFriendly"
                    checked={this.state.isFriendly}
                    onChange = {this.handleChange}
                /> Is Friendly ?
                </label>
                <br/>
                 <label>
                    <input 
                    type="radio" 
                    name = "gender"
                    value = "male"
                    checked={this.state.gender === "male"}
                    onChange = {this.handleChange}
                /> Male
                </label>
                <br/>
                 <label>
                    <input 
                    type="radio" 
                    name = "gender"
                    value = "female"
                    checked={this.state.gender === "female"}
                    onChange = {this.handleChange}
                /> Female
                </label>
                
                <br/>
                
                 <label>favouirt colour is :</label>
                   <select
                        value ={this.state.favColor}
                        onChange ={this.handleChange}
                        name= "favColor"
                   >
                        <option value = "red">Red</option>
                        <option value = "blue">Blue</option>
                        <option value = "green">Green</option>
                        <option value = "yellow">Yellow</option>
                        <option >Black</option>
                        <option>Pink</option>
                   </select>
                
                
                
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h1>You are a {this.state.gender}</h1>
                <h1>you favouirt colour is {this.state.favColor}</h1>
                <button onChange = {this.handleChange}>Submit</button>
            </form>    
        );
    }
    
}



export default App;