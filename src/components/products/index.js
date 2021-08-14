import React,{Component,Suspense} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';
import Loading from '../loading';
import './index.css';

const LazyComponent= React.lazy(()=>import('./product'))

class Products extends Component {

  addProduct=(item)=>{
    const newItem={...item,quantity:item.quantity+1}
    const productList=this.props.products.slice()||[];
    const cartList=this.props.cartProduct.slice()||[];
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
    const cartList=this.props.cartProduct.slice()||[];
    const selectedProductIndex=productList.findIndex(product=>product.id===item.id);
    const selectedCartIndex=cartList.findIndex(product=>product.id===item.id);
    if(item.quantity===1) cartList.splice(selectedCartIndex,1)
    else cartList[selectedCartIndex]=newItem
    productList[selectedProductIndex]=newItem
    this.props.addProduct({cartList,productList})
  }

  render(){
    const {products,loading,error} = this.props;
    if(loading){
        return <Loading className="loading-indicator"/>
    }
    if(error){
      return(
        <div className="center">Unable to fetch the Products</div>
      )
    }
    return(
        <div className="products-container">
              <Suspense fallback={<Loading/>}>
            {products.map(item=>(
                <LazyComponent key={item.id} listItem={item} addProduct={()=>this.addProduct(item)} removeProduct={()=>this.removeProduct(item)}/>
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
   cartProduct:state.products.cartList,
   loading:state.products.loading,
   error:state.products.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
      addProduct:bindActionCreators(actions.addProductRequest,dispatch),
      removeProduct:bindActionCreators(actions.removeProductRequest,dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);