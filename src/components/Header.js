import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.css'
import { useSelector } from 'react-redux';
import { auth } from './firebase';





const Header = () => {
    let select = useSelector(e => e)
    let basket = (select.reducer.basket)
    let user = select.reducer.user;
    // console.log(user)

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return <nav className='header'>
        <Link to='/'><img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /></Link>
        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className='header_searchIcon' />
        </div>

        <div className="header_nav">
            <Link className='header_link' to={!user && '/login'}>
                <div onClick={login} className="header_option">
                    <span className='header_optionLineOne'>Hello {user}</span>
                    <span className='header_optionLineTwo'>{user ? 'Sign Out' : "Sign In"}</span>
                </div>
            </Link>

            <Link className='header_link' to='/'>
                <div className="header_option">
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo' >& Orders</span>
                </div>
            </Link>

            <Link className='header_link' to='/'>
                <div className="header_option">
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>
            </Link>

            <Link to='/checkout' className='header_link'>
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className='header_optionLineTwo header_optionBasketCount'>{basket.length}</span>
                </div>
            </Link>
        </div>
    </nav>;
};

export default Header;


















































// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import { StateContext } from '../index'

// import './Header.css'
// const Header = () => {
//     const { initialState } = useContext(StateContext)
//     const { basket } = initialState;



//     return <nav className='header'>
//         <Link to='/'><img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /></Link>
//         <div className="header_search">
//             <input type="text" className="header_searchInput" />
//             <SearchIcon className='header_searchIcon' />
//         </div>

//         <div className="header_nav">
//             <Link className='header_link' to='/login'>
//                 <div className="header_option">
//                     <span className='header_optionLineOne'>Hello</span>
//                     <span className='header_optionLineTwo'>Black</span>
//                 </div>
//             </Link>

//             <Link className='header_link' to='/'>
//                 <div className="header_option">
//                     <span className='header_optionLineOne'>Returns</span>
//                     <span className='header_optionLineTwo' >& Orders</span>
//                 </div>
//             </Link>

//             <Link className='header_link' to='/'>
//                 <div className="header_option">
//                     <span className='header_optionLineOne'>Your</span>
//                     <span className='header_optionLineTwo'>Prime</span>
//                 </div>
//             </Link>

//             <Link to='/checkout' className='header_link'>
//                 <div className="header_optionBasket">
//                     <ShoppingBasketIcon />
//                     <span className='header_optionLineTwo header_optionBasketCount'>{basket.length}</span>
//                 </div>
//             </Link>
//         </div>
//     </nav>;
// };

// export default Header;
