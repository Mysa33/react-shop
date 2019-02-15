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
        
        var valid;
        var data;
        var subT;
        var products = localStorage.getItem("Cart");
        products = JSON.parse(products);
        valid = products.valid;
        data = products.data;
        subT = products.total;
        this.setState({
            data:data
        });
        this.calcTotal(subT);

    }

    calcTotal(price){
        
        price = parseFloat(price);
        var vatVal = (price/100)*20;
        var finalPrice = (price + ((price/100) * 20)).toFixed(2);
        this.setState({
            subTotal:price,
            total: finalPrice
        });
    }
    
    render(){

        var items = this.state.data;
        var cartMsg;
        if(this.state.valid){
            cartMsg = 
                <div className="row">
                    <div className="alert alert-success">
                        Tour cart is valid
                    </div>
                </div>
        }else{
            cartMsg = 
                <div className="row">
                    <div className="alert alert-danger">
                       Please confirm your cart.
                    </div>
                </div> 
        }

        if(items.length){
            var itemList;
            itemList = items.map((items, i)=>
                <li key={i} className="list-group-item">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={items.api_featured_image}/>
                        </div>
                        <div className="col-lg-7">
                            <h6>Description :</h6>
                            {items.description}
                        </div>
                        <div className="col-lg-2">
                            <h6>Price :</h6>
                            {items.price}
                        </div>
                    </div>
                </li>  
            );
            return(
                <div className="container cart-list-container">
                    {cartMsg}
                    <div className="row">
                        <div className="cart-list-wrapper">
                            <ul className="list-group">
                               {itemList} 
                            </ul>
                        </div>
                    </div>
                    <br/>

                    <div className="row">

                        <div className = "col-lg-8">

                            <h6>Sub-Total : {this.state.subTotal}</h6>

                            <h6>V.A.T : 20%</h6>

                            <h4>Total  : {this.state.total} $</h4>

                        </div>

                        <div className="col-lg-4">
                        
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter code"/>
                                <div className="input-group-append">
                                    <span className="input-group-text">Promo code</span>
                                </div>
                            </div>
                            <button type="button" className="btn btn-info">Confirm code</button>

                        </div>

                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-6">
                            <button type="button" className="btn btn-info">Submit</button>
                        </div>
                        <div className="col-lg-6">
                            <button type="button" className="btn btn-danger clear-cart">Clear</button>
                        </div>
                    </div>
                    
                </div>
            );
        }else{
            return(              
                <Loader></Loader>
            );  
        }
        
    }
        
}
export default CartList;