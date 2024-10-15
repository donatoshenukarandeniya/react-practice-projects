import React from "react";
import ContactsCard from "./ContactsCard";

function App(){
    return(
        <div className = "contacts">
        
                <div>
                <ContactsCard const person = {{
                    name : "Shenuk Randeniya" , 
                    src : "https://via.placeholder.com/300x200" ,
                    phone : "0766078491" , 
                    email : "donatoshenukarandeny@gmail.com"
                    }}
                />
            </div>
            
             <div>
                <ContactsCard const person = {{src : "https://via.placeholder.com/300x200" , 
                name : "Test Name2" , 
                phone : "0711234567" , 
                email : "test2@gmail.com"
                }}/>
             </div>
             
             <div>
                <ContactsCard const person = {{src : "https://via.placeholder.com/300x200" ,
                name : "Test Name3" , 
                phone : "072123457" , 
                email : "test3@gmail.com"}}/>
             </div>
             
             <div>
                <ContactsCard const person = {{src : "https://via.placeholder.com/300x200" , 
                name : "Test Name4" ,
                phone : "0761234567" , 
                email : "test4@gmail.com" }}
                />
                
             </div>
              
        </div>
    );
}

export default App;