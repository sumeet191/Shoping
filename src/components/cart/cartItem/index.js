import React from "react";
import ButtonComponent from '../../addButton';
import './index.css';
const CartItem=({listItem,addProduct,removeProduct})=>{
    return(
        <div className="product-cart-card">
            <div className="product-cart-image-container">
                <img alt={listItem.title} className="product-cart-image" src={listItem.image}/>
            </div>
            <div className="product-cart-detail  p-12 mr-12">
                <div className="product-cart-price">&#8377;{listItem.price}</div>
                <div className="product-cart-category"><b>Category : </b>{listItem.category}</div>
                <div className="product-cart-description ">{listItem.description}</div>
                <div className="product-cart-description"><b>Quantity : </b>{listItem.quantity}</div>
            </div>
            <ButtonComponent quantity={listItem.quantity} addProduct={addProduct} removeProduct={removeProduct}/>
        </div>
    )
}
export default CartItem
