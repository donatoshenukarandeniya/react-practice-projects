import React from "react";

function ContactsCard (props){
    return(
        <div className ="contacts-card">
                <img src = {props.person.src}/>
                <h3 style = {{margin : "30px"}}>{props.person.name}</h3>
                <p>Phone : {props.person.phone}</p>
                <p>Email : {props.person.email}</p>
            </div>
    );
}

export default ContactsCard;