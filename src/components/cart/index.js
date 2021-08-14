import React,{Component,Suspense} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../products/action';
import Loading from '../loading';
import './index.css';

const LazyComponent= React.lazy(()=>import('./cartItem'))
class Cart extends Component {

   addProduct=(item)=>{
    const newItem={...item,quantity:item.quantity+1}
    const productList=this.props.products.slice()||[];
    const cartList=this.props.cartProducts.slice()||[];
    const selectedProductIndex=productList.findIndex(product=>product.id===item.id);
    const selectedCartIndex=cartList.findIndex(product=>product.id===item.id);
    if(selectedCartIndex===-1) cartList.push(newItem)
    else cartList[selectedCartIndex]=newItem
    productList[selectedProductIndex]=newItem
    this.props.addProduct({cartList,productList})
  }

  removeProduct=(item)=>{
    const newItem={...item,quantity:item.quantity-1}
    const productList=this.props.products.slice()||[];
    const cartList=this.props.cartProducts.slice()||[];
    const selectedProductIndex=productList.findIndex(product=>product.id===item.id);
    const selectedCartIndex=cartList.findIndex(product=>product.id===item.id);
    if(item.quantity===1) cartList.splice(selectedCartIndex,1)
    else cartList[selectedCartIndex]=newItem
    productList[selectedProductIndex]=newItem
    this.props.addProduct({cartList,productList})
  }

  render(){
    const {cartProducts} = this.props;
    if(cartProducts.length===0){
        return(<div className="center"><h2>No item added to cart</h2></div>)
    }
    return(
        <div className="products-cart-container">
              <Suspense fallback={<Loading/>}>
                {cartProducts.map(item=>(
                    <LazyComponent  listItem={item} addProduct={()=>this.addProduct(item)} removeProduct={()=>this.removeProduct(item)}/>
                )
                )}
             </Suspense>         
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);