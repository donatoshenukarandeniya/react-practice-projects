import React from "react";

function Product(props){
    return(
        <div>
            <h4 style = {{display : !props.name && "none"}}>Product Name : {props.name}</h4>
            <h4 style = {{color : !props.name && "red"}}>Product Brand : {props.brand}</h4>
        </div>
    );
}

export default Product;