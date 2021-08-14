import React,{Component} from 'react';
import { withRouter,NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';

const navItems=[
  {navigation:'',name:'Products'},
  {navigation:'cart',name:'Cart'}
]

class NavBar extends Component {

  cartCount=()=>{
    return(<div className="cart-count"><span className="cart-count-text">{this.props.cartList.length}</span></div>)
  }

  render(){
    const {cartList}=this.props;
      return(
          <div className="main">
          <div className="navbar navbar-content">
          <div>
            {navItems.map(item=>(
              <NavLink key={item.name} exact activeClassName="navbar-selected" to={'/'+item.navigation} className="navLinks">
                {item.name}
                {item.name==="Cart" && cartList.length>0 ? this.cartCount():null}
              </NavLink>
            ))}
            </div>
            {cartList.length>0?
            <div className="checkout-container">
              <NavLink exact to={'/checkout'}>
              <button className="checkout-button m-12">{"Checkout("+cartList.length+")"}</button>
              </NavLink>
            </div>:null}
          </div>
          
          <div className="container">
              {this.props.children}
          </div>
          </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    cartList:state.products.cartList,
  };
}

export default withRouter(connect(
  mapStateToProps,
  null,
) (NavBar));