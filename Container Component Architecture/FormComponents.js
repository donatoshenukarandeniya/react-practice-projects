import React from "react";

function FormComponents(props){
    return(
            <form>
                <input 
                    name = "firstName" 
                    value = {props.data.firstName}
                    onChange = {props.handleChange}
                    type = "text" 
                    placeholder = "First Name"
                /><br/>
                
                <input 
                    name = "lastName" 
                    value = {props.data.lastName}
                    onChange = {props.handleChange}
                    type = "text" 
                    placeholder = "Last Name"
                /><br/>
                    
                <input 
                    name = "age" 
                    value = {props.data.age}
                    onChange = {props.handleChange}
                    type = "text" 
                    placeholder = "AGE"
                /><br/>
                
                <label>
                    <input
                        type = "radio"
                        name = "gender"
                        value = "male"
                        checked = {props.data.gender === "male"}
                        onChange = {props.handleChange}
                    />Male
                </label>
                <br/>
                
                <label>
                    <input
                        type = "radio"
                        name = "gender"
                        value = "female"
                        checked = {props.data.gender === "female"}
                        onChange = {props.handleChange}
                    />Female
                </label>
                <br/>
                    <select
                        value = {props.data.destination}
                        name = "destination"
                        onChange = {props.handleChange}
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
                        onChange = {props.handleChange}
                        checked = {props.data.isVegan}
                    />Is Vegan ?
                </label>
                
                <br/>
                <label>
                    <input 
                        type = "checkbox" 
                        name = "isKosher"
                        onChange = {props.handleChange}
                        checked = {props.data.isKosher}
                    /> Is Kosher?
                </label>
                
                <br/>
                <label>
                    <input 
                        type = "checkbox" 
                        name = "isLactoseFree"
                        onChange = {props.handleChange}
                        checked = {props.data.isLactoseFree}
                    />Is Lactose Free ?
                </label>
                
                <br/>
                <br/>
                
                <button>Submit!</button>
                <hr/>
                <h1>Entered Information</h1>
                <h4>Your Name : {props.data.firstName} {props.data.lastName}</h4>
                <h4>Your age : {props.data.age}</h4>
                <h4>Your Gender : {props.data.gender}</h4>
                <h4>Your Destination: {props.data.destination}</h4>
                <h4>Your dietary restriction : </h4>
                <h4>Vegan :{props.data.isVegan ? "yes" : "no"}</h4>
                <h4>Kosher :{props.data.isKosher ? "yes" : "no"}</h4>
                <h4>Lectose :{props.data.isLactoseFree ? "yes" : "no"}</h4>

                
            </form>
        );
}

export default FormComponents;