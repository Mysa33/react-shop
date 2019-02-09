import React from 'react';
import CartList from '../cart/cartList';

class CartContent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            valid : false,
            total:0
        };
    }
    
    componentDidMount() {
        var data = localStorage.getItem("Cart");
        console.log("data :", data);
    }
    
    render(){
        return(
           <CartList></CartList>
        );
    }
        
}
export default CartContent;