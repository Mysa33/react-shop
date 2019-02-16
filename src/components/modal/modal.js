import React from 'react';
import ClearCart from '../clearBtn/clearCart';

class Modal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            display:this.props.open,
            codePromo:this.props.promo,
            promoTxt:"",
            cmdNumber:"",
            cmdDate:""
        };
    }
    
    componentDidMount() {
    
        var promo = this.state.codePromo;
        var date = new Date();
        let dateY = date.getFullYear();
        let dateM = date.getMonth() + 1;
        let dateD = date.getDate();
        let fullDate = dateM + '/' + dateD + '/' + dateY;
        let cmdRef = Math.random().toString(36).substring(7);
        let cmdNb = dateM.toString() + dateD.toString() + dateY.toString();
        fullDate = fullDate.toString();
        this.setState({cmdNumber:cmdNb + '-' + cmdRef});
        this.setState({cmdDate:fullDate});
        if(promo){
            this.setState({promoTxt:"Code used"});
        }else{
            this.setState({promoTxt:"Not used"});
        }
    }
    
    render(){
        return(
           <div className="row modal-row" style={{display: this.props.open ? 'block' : 'none' }}>
           
            <div className="modal-wrapper">
                <div className="modal" aria-hidden="false" style={{display: this.props.open ? 'block' : 'none' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">You command N°: {this.state.cmdNumber}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            
                            </button>
                        </div>
                        <div className="modal-body">
                            <article>
                                <h6>Detail :</h6>
                                <p>
                                    <strong>Items number : </strong>
                                    {this.props.data.length}
                                </p>
                                <p>
                                    <strong>Total : </strong>
                                    {this.props.total} $
                                </p>
                                <p>
                                    <strong>Code : </strong>
                                    {this.state.promoTxt}
                                </p>
                                <p>
                                    <strong>Date : </strong>
                                    {this.state.cmdDate}
                                </p>
                            </article>
                            <hr/>
                            <article>
                                <h6>Our services :</h6>
                                <p>
                                    Nullam pharetra nulla metus, et ultricies justo tincidunt vel. 
                                    Quisque pulvinar ultricies lacus at facilisis. 
                                    Pellentesque pharetra vulputate mauris, vitae placerat erat viverra non.
                                </p>
                                
                            </article>
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