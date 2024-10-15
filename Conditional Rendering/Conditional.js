import React from "react";

function Conditional(props) {
    if (props.isLodding === true) {
        return (
            <h1>Loading...</h1>  
        );
    } else {
        return (
            <h1>Some cool stuff about conditional rendering</h1>
        );
    }
}

export default Conditional;

