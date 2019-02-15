import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ClearCart extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            total:0,
            valid:false
        };
    }
    
    componentDidMount() {
        
    }

    clearCart(){

        let localData = {
            data:[],
            total:0,
            valid:false
        };
        this.setState({
            data:[],
            total:0,
            valid:false
        });
        localStorage.setItem("Cart", JSON.stringify(localData));
    }
    
    render(){
        return(
            <button onClick={((e) => this.clearCart())} type="button" className="btn btn-danger clear-cart"><Link to="/" style={{'color':'#ffffff'}}>Clear</Link></button>
        );
    }
        
}
export default ClearCart;