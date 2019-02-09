import React from 'react';
import Loader from '../loader';

class CartList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            valid:false,
            subTotal:0,
            total:0
        };
    }
    

    componentDidMount() {
        var products = localStorage.getItem("Cart");
        console.log("products :", products.valid);
        var subT = 500;
        this.calcTotal(subT);
        if(products.valid){
            console.log("cart is valid");
        }else{
            console.log("cart is NOT valid");
        }
    }

    calcTotal(price){
        var finalPrice = (price + ((price/100) * 20)).toFixed(2);
        this.setState({
            total: finalPrice
        });
    }
    
    render(){
        return(
            <div className="container cart-list-container">
                <div className="row">
                    <div className="cart-list-wrapper">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <img src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/495/original/open-uri20171223-4-9hrto4?1514063330"/>
                                    </div>
                                    <div className="col-lg-7">
                                    
                                        <h6>Description :</h6>
                                        Dapibus ac facilisis in Dapibus ac facilisis in Dapibus ac facilisis in Dapibus ac facilisis in.
                                        Dapibus ac facilisis in Dapibus ac facilisis in Dapibus ac facilisis in Dapibus ac facilisis in.
                                        Dapibus ac facilisis in Dapibus ac facilisis in Dapibus ac facilisis in Dapibus ac facilisis in 
                                        Dapibus ac facilisis in Dapibus ac facilisis in Dapibus ac facilisis in Dapibus ac facilisis in
                                    
                                    </div>
                                    <div className="col-lg-2">
                                        <h6>Price : </h6>
                                        15
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div>
                        <h6>Sub-Total : {this.state.subTotal}</h6>
                        <h6>V.A.T : 20%</h6>
                        <h4>Total  : {this.state.total} $</h4>
                    </div>
                </div>
            </div>
        );
    }
        
}
export default CartList;