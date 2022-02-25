import React from "react";
import "./Product.css"
const Product = (props) => { 
    // const ProductName = "mobile"
    // const ProductPrice = 5000
    return ( 
        <div className="product_card">
            <p className="product_card_title">{props.name}</p>
            <p onClick={props.click} className="product_card_price" >{props.price}</p>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Product