import React from 'react'


function CartItem (props) {
    return (
        <div className="collection-item">
            <div className="row border">
                <div className="col-md-8">{props.cartitem.product.name}</div>
                <div className="col-md-2">${props.cartitem.product.priceInCents / 100}</div>
                <div className="col-md-2">{props.cartitem.quantity}</div>
            </div>
        </div>
    )
}

export default CartItem