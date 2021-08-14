import React,{useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './products/action';
import Products from './products';
import Checkout from './checkout';
import Cart from './cart'
import NavBar from './navbar';
import ErrorBoundary from './ErrorBoundary';
import Progress from './progress'

function Main(props) {

    useEffect(()=>{
         props.getList()
    },[])

    return(
            <NavBar>
                <ErrorBoundary>
                    <Switch>
                            <Route exact path="/" component={Products} />
                            <Route exact path="/cart" component={Cart} />
                            <Route exact path="/checkout" component={Checkout}/>
                            <Route path="/" component={Progress}/>
                    </Switch>
                 </ErrorBoundary>
            </NavBar>
        )
}

function mapDispatchToProps(dispatch) {
  return {
      getList:bindActionCreators(actions.getProductRequest,dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Main);