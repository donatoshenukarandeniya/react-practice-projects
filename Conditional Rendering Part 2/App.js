import React , {Component} from "react";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            unreadMessage  : [""]
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.unreadMessage.length > 0 && 
                    <h2>You have {this.state.unreadMessage.length} unread message</h2>
                }
            </div>
        );
    }
}

export default App;