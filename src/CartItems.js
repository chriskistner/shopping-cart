import React from 'react';
import CartItem from './CartItem'


function CartItems(props) {
    return (
        <div className="container">
            <h1>Items</h1>
            <div className="collection-item">
            <div className="row border text-white bg-dark">
                <div className="col-md-8">PRODUCT NAME</div>
                <div className="col-md-2">PRODUCT PRICE</div>
                <div className="col-md-2">QUANTITY</div>
            </div>
        </div>
            {
          props.items.map(item => <CartItem cartitem={item} />)
        }
        </div>
    )
}

export default CartItems;