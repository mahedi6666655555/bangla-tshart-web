import React from 'react';
import './Style.css'

const Cart2 = ({ Cart, handelCart }) => {
    let massage;

    if (Cart.length === 0) {
        massage = <p>add some items</p>
    }
    else {
        massage = <div>
            <h1 className="red1">boroloxxx</h1>

            <p>thanks</p>

        </div>
    }
    return (
        <div>



            <h1 className='text-center'>{Cart.length}</h1>
            <h1 className="card12">mahedi</h1>
            {massage}
            {
                Cart.map(tshart => <p key={tshart._id} >{tshart.name} <button
                    onClick={() => handelCart(tshart._id)}
                    className='px-7 py-3 text-red-400 bg-gray-400'>x</button></p>)
            }
        </div>
    );
};

export default Cart2;