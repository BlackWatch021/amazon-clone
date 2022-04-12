export const initialState = {
    basket: [],
    user: null
}



export let getTotalPrice = (productsInBasket) => {
    return productsInBasket.reduce((acc, e) => acc + e.aPrice, 0);
}




let reducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case 'SET_USER': return { ...state, user: action.user }
        case 'ADD_TO_BASKET': return { ...state, basket: [...state.basket, action.payload] };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = newBasket.findIndex(e => e.id === action.payload.id);
            newBasket.splice(index, 1);
            return { ...state, basket: newBasket }
        default: return state;

    }
}

export default reducer;



// { ...state, basket: [...state.basket.filter(e => e.id !== action.payload.id)] }