import React,{Component,Suspense} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../products/action';
import Loading from '../loading';
import './index.css';

const LazyComponent= React.lazy(()=>import('./checkoutItem'))

class Checkout extends Component {
   componentDidMount(){
       const {cartProducts} = this.props;
       if(cartProducts.length===0){
         this.props.history.push('/cart')
       }
    }

  get TotalCalculation(){
    let total=0;
    let counter=0;
    let items=0
    const list=this.props.cartProducts;
    while(counter<list.length){
      total+=list[counter].quantity*list[counter].price;
      items+=list[counter].quantity
      counter++
    }
    return {price:total.toFixed(2),items}
  }
  render(){
   
    const {cartProducts} = this.props;
    if(cartProducts.length===0){
        return(<div className="center"><h2>No item added to cart</h2></div>)
    }
    return(
        <div className="checkout-cart-container">
           <div className="checkout-header">
              <div className="checkout-item">{`Total Products: ${cartProducts.length}`}</div>
              <div className="checkout-item">{`Total Items: ${this.TotalCalculation.items}`}</div>
              <div className="checkout-item">{'Total Price: '} &#8377; {this.TotalCalculation.price}</div>
              <button className="checkout-button">Proceed to Payment</button>
            </div>
            <div className="chekout-list">
              <Suspense fallback={<Loading/>}>
                {cartProducts.map(item=>(
                    <LazyComponent  listItem={item} />
                )
                )}
             </Suspense>       
            </div>  
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
   products:state.products.productList,
   cartProducts:state.products.cartList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
      addProduct:bindActionCreators(actions.addProductRequest,dispatch),
      removeProduct:bindActionCreators(actions.removeProductRequest,dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);