import React from 'react';
import CartItem from './CartItem'


function CartItems(props) {
    const shoppingCart = props.items;
    const totals = shoppingCart.map(target => target.product.priceInCents * target.quantity);
    const cartTotal = totals.reduce( (a,b) => a + b, 0);

    const cartIsEmpty = ( 
    <div className="row border">
        <div className="col-md-2">Your Cart Is Empty</div>
    </div>
    );

    const cartHasStuff = (
    <div className="row border text-white bg-dark">
        <div className="col-md-2">TOTAL ${cartTotal /100}</div>
        <button onClick={() => props.handleClearCart()}>Clear Cart</button>
    </div>
    )


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
        {
            shoppingCart.length === 0 ? cartIsEmpty :  cartHasStuff
        }
        </div>
    )
}

export default CartItems;