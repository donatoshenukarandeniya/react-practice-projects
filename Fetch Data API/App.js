import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            loading : false ,
            character: [] 
        };
    }

    componentDidMount() {
        this.setState({ loading : true})
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading :false , 
                    character: data [1]
                });
            });
    }

    render() {
        let text = this.state.loading ? "loading..." :this.state.character.title
        return (
            <p>{text}</p>
        );
    }
}

export default App;
