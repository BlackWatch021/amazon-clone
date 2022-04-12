import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Checkout.css'
import CurrencyFormat from 'react-currency-format'
import { getTotalPrice } from './redux/reducer'



const Checkout = () => {

    let select = useSelector(e => e);
    let products = select.reducer.basket
    // console.log(products)


    let dispatch = useDispatch()
    const removeFromBasket = (id) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            payload: {
                id
            }
        })
    }

    let arr = []
    let start = (e) => {
        for (let i = 0; i < e; i++) {
            arr[i] = '⭐'
        }
    }


    return <div className='checkout'>
        <div className="checkout_left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checout_ad" />



            {select.reducer.basket.length === 0 ? <div>
                <h1>Your Shopping Basket is empty</h1>
                <p>You have no items in your basket. To buy one or more items. click "Add to basket" next to the item.</p>
            </div> : <div>
                <h2 className='checkout_title'>Your Shopping Basket</h2>
                {products.map(e => <div className='checkout_product'>

                    <img src={e.image} alt="" />
                    <div className="checkout_product_info">
                        <p className='product_title'>{e.title}</p>
                        <p className="product_price">
                            <small>₹</small>
                            <b>{e.price}</b>
                        </p>
                        <div className="product_rating">
                            {start(e.rating)}
                            {arr.map(e => <p >⭐</p>)}
                        </div>
                        <button onClick={() => removeFromBasket(e.id)}>Remove from basket</button>
                    </div>
                </div>)}
            </div>
            }
        </div>
        <div>
            {products.length > 0 && (
                <div className="checkout_right">
                    <div className="subtotal">
                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                    <p>

                                        Subtotal ({select.reducer.basket.length} items): <strong>{value}</strong>
                                    </p>
                                    <small className="subtotal__gift">
                                        <input type="checkbox" /> This order contains a gift
                                    </small>
                                </>
                            )}
                            decimalScale={2}
                            value={getTotalPrice(products)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'₹'}
                        />
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
            )}
        </div>
    </div>;
};

export default Checkout;

