import React from 'react';
import './Product.css'
import { useDispatch } from 'react-redux';

const Product = ({ id, rating, price, aPrice, title, image }) => {

    const dispatch = useDispatch()


    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                id, title, image, price, aPrice, rating
            }
        })
    }



    let arr = []
    let start = (e) => {
        for (let i = 0; i < e; i++) {
            arr[i] = '⭐'
        }
    }

    return <div key={id} className='product'>
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>₹</small>
                <b>{price}</b>
            </p>
            <div className="product_rating">
                {start(rating)}
                {arr.map(e => <p >⭐</p>)}{/* Error is here, we have to give a key to the <p> tag  */}
            </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to basket</button>
    </div>;
};

export default Product;











































// import React, { useContext } from 'react';
// import './Product.css'
// import { StateContext } from '../index'



// const Product = ({ id, rating, price, title, image }) => {

//     const { reducer } = useContext(StateContext)


//     const addToBasket = () => {
//         reducer.dispatch({
//             type: 'ADD_TO_BASKET',
//             payload: {
//                 id, title, image, price, rating
//             }
//         })
//     }



//     let arr = []
//     let start = (e) => {
//         for (let i = 0; i < e; i++) {
//             arr[i] = '⭐'
//         }
//     }

//     return <div key={id} className='product'>
//         <div className="product_info">
//             <p>{title}</p>
//             <p className="product_price">
//                 <small>₹</small>
//                 <b>{price}</b>
//             </p>
//             <div className="product_rating">
//                 {start(rating)}
//                 {arr.map(e => <p >⭐</p>)}{/* Error is here, we have to give a key to the <p> tag  */}
//             </div>
//         </div>
//         <img src={image} alt="" />
//         <button onClick={addToBasket}>Add to basket</button>
//     </div>;
// };

// export default Product;























{/* <div className="product_rating">
    {Array(rating).fill().map((_) =>
        <p>⭐</p>)}

</div> */}
