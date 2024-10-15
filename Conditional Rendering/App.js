import React, { Component } from "react";
import Conditional from "./Conditional";

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLodding: true  
        };
    }

    componentDidMount() {  
        setTimeout(() => {
            this.setState({    
                isLodding: false
            });
        }, 1500);
    }

    render() {
        return (
            <div>
                <Conditional isLodding={this.state.isLodding} />
            </div>
        );
    }
}

export default App;
