import Cart_item from './Cart_item';
import Cart_total from './Cart_total';
import React from 'react';
import './Cart.css'


const Cart = () => {
    console.log('Cart 랜더링')

    return (
        <div id='shopBasket' className='container'>
            <h3>
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                &nbsp;&nbsp;장바구니&nbsp;&nbsp;
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            </h3>

            <Cart_item />
            <Cart_total />

        </div>
    );
}

export default Cart;