import { ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, FETCH_PRODUCT_DETAIL } from "./action-types/cart-actions";

export const addToCart = (id, quantity) => {
    return {
        type: ADD_TO_CART,
        id,
        quantity,
    };
};

export const removeItem = id => {
    return{
        type: REMOVE_ITEM,
        id,
    }
}

export const addQuantity = id => {
    return{
        type: ADD_QUANTITY,
        id,
    }
}

export const subtractQuantity = id => {
    return{
        type: SUB_QUANTITY,
        id,
    }
}

export const fetchProductDetail = id => {
    return{
        type: FETCH_PRODUCT_DETAIL,
        id
    }
}