import React from 'react';
import CartList from '../cart/cartList';
import ClearCart from '../clearBtn/clearCart';

class Modal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            valid : false,
            total:0,
            display:true
        };
    }
    
    componentDidMount() {
        
        
    }
    
    render(){
        return(
           <div className="row modal-row" style={{display: this.state.display ? 'block' : 'none' }}>
           
            <div className="modal-wrapper">
                <div className="modal" aria-hidden="false" style={{display: this.state.display ? 'block' : 'none' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <ClearCart></ClearCart>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
           
           </div>
        );
    }
        
}
export default Modal;