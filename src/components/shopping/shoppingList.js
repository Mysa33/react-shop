import React from 'react'

class ShoppingList extends React.Component {

  render() {
    return (
        <div>
          <div className="shopping-list-wrapper">
            <i className="material-icons">shop</i>
            <br/>
            Shop now !
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