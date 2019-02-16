import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loader from '../loader';
import Modal from '../modal/modal';
import ClearCart from '../clearBtn/clearCart';


class CartList extends React.Component {
    
    constructor(props) {

        super(props);

        this.state = {
            data:[],
            valid:true,
            subTotal:0,
            total:0,
            inputValue:'',
            promo:false,
            showModal:false
        };
        this.applyPromo = this.applyPromo.bind(this);

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
            data:data,
            valid:valid
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

    caclPromo(){
        
        var actualPrice;
        var comOffer;
        var newPrice;
        actualPrice = this.state.total;
        comOffer = ((actualPrice /100) * 5).toFixed(2);
        if(actualPrice>0){
            newPrice = (actualPrice - comOffer).toFixed(2) ;
            this.setState({
                total:newPrice,
                promo:true
            });
        }
    }

    applyPromo(e) {

        var input;
        var inputValue;
        var checkCode;
        var promoCode = 'LaJavaness';
        promoCode = promoCode.toString();
        if (this.refs.promoInput !== null) {
            input = this.refs.promoInput;
            inputValue = input.value;
            inputValue = inputValue.toString();
            checkCode = inputValue.localeCompare(promoCode);
            if(checkCode !== -1){
                let localData;
                this.caclPromo();
                localData = {
                    data:this.state.data,
                    total:this.state.total,
                    valid:this.state.valid
                };
                localStorage.setItem("Cart", JSON.stringify(localData));
                input.value = "";
            }else{
                alert("Invalid code");
            }
        }
    }

    
    
    render(){

        var items = this.state.data;
        var cartMsg;
        //Valid status Msg
        if(this.state.valid){
            cartMsg = 
                <div className="row">
                    <div className="alert alert-success">
                        Your cart is valid
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
        //Empty cart Msg
        if(items.length){
            var emptyCart = 
                <div className="row">
                    <div className="col-lg-12">
                        <h5>Items number : {items.length}</h5>
                    </div>
                </div>
        }else{
            var emptyCart = 
            <div className="row">
                <div className="col-lg-12">
                    <h5>Your cart is empty</h5>
                </div>
            </div>
        }
        //Cart items list
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
                <div className="container-fluid">
                    <Modal 
                        style={{display: this.state.modalVis ? 'block' : 'none' }} 
                        data={this.state.data} total={this.state.total} 
                        promo={this.state.promo} 
                        open={this.state.showModal}
                    >
                    </Modal>
                    <div className="container cart-list-container">
                        {cartMsg}
                        {emptyCart}
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
                                    <input ref="promoInput" type="text" className="form-control" placeholder="Enter code"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text">Promo code</span>
                                    </div>
                                </div>
                                <button onClick={((e) => this.applyPromo())} type="button" className="btn btn-info" disabled={this.state.promo}>Confirm code</button>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-6">
                                <button onClick={() => this.setState({showModal: true})} type="button" className="btn btn-info" disabled={!this.state.valid}>Submit</button>
                            </div>
                            <div className="col-lg-6">
                                <ClearCart></ClearCart>
                            </div>
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