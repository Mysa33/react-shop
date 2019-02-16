import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class ShoppingList extends React.Component {

  constructor(props) {
        
    super(props);
    this.state = {
      redirectUrl:"/"
    }
    this.confirmCart = this.confirmCart.bind(this);

  }  
  confirmCart(){

    var cartInfos = {

      data:this.props.data,
      total:this.props.total,
      valid:false

    }
    if(cartInfos.total>0){
      cartInfos.valid = true;
      localStorage.setItem("Cart", JSON.stringify(cartInfos));
      this.setState({redirectUrl:"/cart"});
    }else{
      return;
    }
    

  }

  render() {
    return (
        <div>
          <div className="shopping-list-wrapper" onClick={((e) => this.confirmCart())} >
            <Link to="/cart" style={{'color':'#ffffff'}}>
            
              <i className="material-icons">shop</i>
              <br/>
              Shop now !
            
            </Link>
            
          </div>

          <div className="shopping-list-details-wrapper">
            <h5>Qty : {this.props.qty}</h5>
            <h5>Total Price* : {this.props.total}</h5>
            (*) : tax free
          </div>
        </div>
    );
  }

}
export default ShoppingList;