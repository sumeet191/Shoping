import React from "react";
import ButtonComponent from '../../addButton';
import './index.css';

const checkoutItem=({listItem})=>{
    return(
        
        <div className="checkout-cart-card">
            <div className="checkout-cart-image-container">
                <img alt={listItem.title} className="checkout-cart-image" src={listItem.image}/>
            </div>
            <div className="checkout-cart-detail  p-12 mr-12">
                <div className="checkout-cart-price">&#8377;{listItem.price}</div>
                <div className="checkout-cart-category"><b>Category : </b>{listItem.category}</div>
                <div className="checkout-cart-description ">{listItem.description}</div>
                <div className="checkout-cart-description"><b>Quantity : </b>{listItem.quantity}</div>
            </div>
            <div className="checkout-cart-price">&#8377; {listItem.quantity*listItem.price}</div>
        </div>
    )
}
export default checkoutItem
