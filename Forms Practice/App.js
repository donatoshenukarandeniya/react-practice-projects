import React , {Component} from "react";

class App extends React.Component{
    
    constructor(){
        super()
        this.state = {
            firstName : "" , 
            lastName : "" , 
            age : null , 
            gender : "" , 
            destination : "" , 
            isVegan  : false , 
            isKosher : false ,
            isLactoseFree : false 
           
            
        }
        this.handleChange = this.handleChange.bind(this); 

    }
    
    handleChange(event){
        const {name , value , type , checked} = event.target ; 
        type === "checkbox" ?
                this.setState({
                  [name] : checked  
                })
            :
            this.setState({
                [name] : value
            })
    }
    
    render(){
        return(
            <form>
                <input 
                    name = "firstName" 
                    value = {this.state.firstName}
                    onChange = {this.handleChange}
                    type = "text" 
                    placeholder = "First Name"
                /><br/>
                
                <input 
                    name = "lastName" 
                    value = {this.state.lastName}
                    onChange = {this.handleChange}
                    type = "text" 
                    placeholder = "Last Name"
                /><br/>
                    
                <input 
                    name = "age" 
                    value = {this.state.age}
                    onChange = {this.handleChange}
                    type = "text" 
                    placeholder = "AGE"
                /><br/>
                
                <label>
                    <input
                        type = "radio"
                        name = "gender"
                        value = "male"
                        checked = {this.state.gender === "male"}
                        onChange = {this.handleChange}
                    />Male
                </label>
                <br/>
                
                <label>
                    <input
                        type = "radio"
                        name = "gender"
                        value = "female"
                        checked = {this.state.gender === "female"}
                        onChange = {this.handleChange}
                    />Female
                </label>
                <br/>
                    <select
                        value = {this.state.destination}
                        name = "destination"
                        onChange = {this.handleChange}
                    >
                        <option value = "">select Location</option>
                        <option value = "srilanka">Srilanka</option>
                        <option value = "germany">Germany</option>
                        <option value = "japan">Japan</option>
                    </select>
                <br/>
                <label>
                    <input 
                        type = "checkbox" 
                        name = "isVegan"
                        onChange = {this.handleChange}
                        checked = {this.state.isVegan}
                    />Is Vegan ?
                </label>
                
                <br/>
                <label>
                    <input 
                        type = "checkbox" 
                        name = "isKosher"
                        onChange = {this.handleChange}
                        checked = {this.state.isKosher}
                    /> Is Kosher?
                </label>
                
                <br/>
                <label>
                    <input 
                        type = "checkbox" 
                        name = "isLactoseFree"
                        onChange = {this.handleChange}
                        checked = {this.state.isLactoseFree}
                    />Is Lactose Free ?
                </label>
                
                <br/>
                <br/>
                
                <button>Submit!</button>
                <hr/>
                <h1>Entered Information</h1>
                <h4>Your Name : {this.state.firstName} {this.state.lastName}</h4>
                <h4>Your age : {this.state.age}</h4>
                <h4>Your Gender : {this.state.gender}</h4>
                <h4>Your Destination: {this.state.destination}</h4>
                <h4>Your dietary restriction : </h4>
                <h4>Vegan :{this.state.isVegan ? "yes" : "no"}</h4>
                <h4>Kosher :{this.state.isKosher ? "yes" : "no"}</h4>
                <h4>Lectose :{this.state.isLactoseFree ? "yes" : "no"}</h4>

                
            </form>
        );
    }
    
}

export default App;