import React from 'react';
import Loader from '../loader';
import ShoppingList from '../shopping/shoppingList';

class ProductsList extends React.Component {
    
    constructor(props) {
        
        super(props);
        this.state = {
            data: [],
            cart : [],
            total:0
        };
        this.addTocart = this.addTocart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    
    }
    
    addTocart (e, data, cart) {
        
        cart.push(data);
        this.updateTotal(cart);

    }

    removeFromCart (e, items, cart) {
        
        var itemIndex;
        var itemId = items.id;
        function elemInd(element) {
            return element.id === itemId;
        }
        itemIndex = cart.findIndex(elemInd);
        if(itemIndex > -1){
            cart.splice(itemIndex, 1);
        }
        this.setState({
            cart: cart
        });
        if(cart.length>0){
            this.updateTotal(cart);
        }
        
    }

    updateTotal(cart){

        const reducer = (a, b) => a + b;
        let priceArray = [];
        for(let i in cart){
            priceArray.push(parseFloat(cart[i].price));
        }
        this.setState({
            total: priceArray.reduce(reducer).toFixed(2)
        });
        let total = priceArray.reduce(reducer).toFixed(2);
        this.shareData(cart, total);
        
    }

    shareData(cart, total) {
        
        var storageName = "Cart";
        var data = {
            "data":cart,
            "total":total,
            "valid":false
        }
        localStorage.setItem(storageName, JSON.stringify(data));
    }
    
    componentDidMount() {

        fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        .then(function(result) {
            return result.json();
        })
        .then(result => this.setState({data: result, isFetching: false}))
        .catch(e => console.log(e));
        //check cart
        var storedData = JSON.parse(localStorage.getItem("Cart"));
        if((storedData !== null)&&((storedData.total>0))) {
            this.setState({
                total:storedData.total,
                cart:storedData.data
            });
        }else{
            return;
        }

    }
    

    render(){
          
        var items = this.state.data;
        var cart = this.state.cart;
        if(items.length){
            var prodsNb = items.length;
            var listItems = items.map((items) =>        
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" key={items.id}>
                    <div className="card">
                        <img src={items.api_featured_image} className="card-img-top" alt={items.name}/>
                        <hr/>
                        <div className="card-body">
                            <h5 className="card-title">{items.name}</h5>
                            <strong>Price : </strong>
                            <span>{items.price} $</span>
                            <p className="card-text">In stock</p>
                            <a className="btn add-to-cart" onClick={((e) => this.addTocart(e, items, cart))}>
                                <i className="material-icons">add_shopping_cart</i>
                                <span>Add</span>
                            </a>
                            <a className="btn remove-from-cart" onClick={((e) => this.removeFromCart(e, items, cart))}>
                                <i className="material-icons">add_shopping_cart</i>
                                <span>Remove</span>
                            </a>
                        </div>
                    </div>
                </div>
            );
            return(
                <div className="container products-list-container">
                    <div className="row">
                        {listItems}
                    </div>
                    <div>
                        <ShoppingList qty = {cart.length} total = {this.state.total}></ShoppingList>
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
export default ProductsList;