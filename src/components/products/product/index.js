import React from "react";
import ButtonComponent from '../../addButton';
import './index.css';
const Product=({listItem,addProduct,removeProduct})=>{
    return(
    <div className="product-card-container">
        <div className="product-card" title={listItem.title}>
            <div className="product-image-container">
                <img alt={listItem.title} className="product-image" src={listItem.image}/>
            </div>
            <div className="product-detail  p-12">
                <div className="product-price">&#8377;{listItem.price}</div>
                <div className="product-category"><b>Category : </b>{listItem.category}</div>
                <div className="product-description ">{listItem.description}</div>
            </div>
        </div>
        <ButtonComponent quantity={listItem.quantity} addProduct={addProduct} removeProduct={removeProduct}/>
    </div>
    )
}
export default Product
