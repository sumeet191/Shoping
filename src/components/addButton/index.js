import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const ButtonComponent=({quantity,addProduct,removeProduct})=>{
      if(quantity && quantity>0){
        return(<div className="mb-12" style={{display:'flex ',alignItems:'center'}}>
            <button className="empty-button" onClick={removeProduct}>-</button>
            <div className="product-quantity">{quantity}</div>
            <button className="empty-button" onClick={addProduct}>+</button>
            </div>)
      }else{
          return(
        <button className="solid-button mb-12" onClick={addProduct}>Add item</button>
          )
      }
}

ButtonComponent.propTypes = {
  quantity: PropTypes.object.isRequired,
  addProduct:PropTypes.function,
  removeProduct:PropTypes.function
};

export default ButtonComponent