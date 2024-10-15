import React , {Component} from "react";

class App extends React.Component{
    constructor(){
        super();
        this.state = {}
    }
    
    ComponentDidMount(){
        // Get the data i need to correctly display
    }
    
    ComponentWillReceivePropos(nextProps){
         if(nextProps.whatever !== this.props.whatever){
            // do something important here
        }
    }
    
    ShouldComponentUpdate(nextProps , nextProps){
        // return true if want it to update
        // return false if not
    }
    
    ComponentwillUnmount(){
        // teardown or clear your code befor yous component disappears
        //  (E.g .remove event listner)
    }
    
    render(){
        return(
            <div>Code hoes here</div>
        );
    }
}

export default App;