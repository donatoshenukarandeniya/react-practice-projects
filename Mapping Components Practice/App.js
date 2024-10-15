import React from "react";
import Product from "./Product";
import ProductData from "./ProductData";

function App(){
    const ProductComponent = ProductData.map(p => (
        <Product
                key = {p.id} 
                name = {p.name} 
                brand = {p.Brand}    
            />
        ));
   
    return(
        <div>
            {ProductComponent}
        </div>
    );
}

export default App;