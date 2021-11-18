import {
    ADD_QUANTITY,
    ADD_SHIPPING,
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    SUB_SHIPPING,
} from "../actions/action-types/cart-actions";

const initState = {
    products: [
        {
            id: 0,
            name: "hero Product",
            detail: "Lorem ipsum dolor sit amet",
            price: "99",
            hero: "OMG This just came out today!",
            image: "http://placehold.it/940x300/999/CCC",
        },
        {
            id: 1,
            name: "Product 1",
            detail: "Lorem ipsum dolor sit amet",
            price: "99",
            info: "This is the latest and greatest product from Derp corp.",
            image: "http://placehold.it/300x300/999/CCC",
        },
        {
            id: 2,
            name: "Product 2",
            detail: "Lorem ipsum dolor sit amet",
            price: "99",
            offer: "BOGOF",
            image: "http://placehold.it/300x300/999/CCC",
        },
        {
            id: 3,
            name: "Product 3",
            detail: "Lorem ipsum dolor sit amet",
            price: "99",
            image: "http://placehold.it/300x300/999/CCC",
        },
        {
            id: 4,
            name: "Product 4",
            detail: "Lorem ipsum dolor sit amet",
            price: "99",
            offer: "No srsly GTFO",
            image: "http://placehold.it/300x300/999/CCC",
        },
        {
            id: 5,
            name: "Product 5",
            detail: "Lorem ipsum dolor sit amet",
            price: "99",
            image: "http://placehold.it/300x300/999/CCC",
        },
        {
            id: 6,
            name: "Product 6",
            detail: "Lorem ipsum dolor sit amet",
            price: "99",
            info: "This is the latest and greatest product from Derp corp.",
            offer: "info with offer",
            image: "http://placehold.it/300x300/999/CCC",
        },
    ],
    addedItems: [],
    total: 0,
};

const cartReducer = (state = initState, action) => {
    ///inside home component
    //from product listing page
    if (action.type === ADD_TO_CART) {        
        let addedItem = state.products.find(
            (product) => product.id === action.id
        );
        //check if action id exists in the addedItems
        let existed_item = state.addedItems.find(
            (product) => action.id === product.id
        );
        if (existed_item) {
            console.log('quantity', action.quantity)
            addedItem.quantity += action.quantity;
            console.log('added items',state.addedItems)
            return {
                ...state,
                
                total: state.total + parseFloat(addedItem.price * action.quantity),
            };
        } else {
            console.log('quantity from else', action.quantity)
            addedItem.quantity = action.quantity;
            console.log('added items',state.addedItems)
            //calculating total
            let newTotal = state.total + parseFloat(addedItem.price * action.quantity);

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal,
            };
        }
    }

    //removing item from cart
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(
            (product) => action.id === product.id
        );
        let newItems = state.addedItems.filter(
            (product) => action.id !== product.id
        );

        //calculating the total
        console.log(state);
        let updatedTotal =
            state.total -
            parseFloat(itemToRemove.price) * itemToRemove.quantity;

        return {
            ...state,
            addedItems: newItems,
            total: updatedTotal,
        };
    }

    ///inside cart component
    //adding quantity
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.products.find(
            (product) => product.id === action.id
        );
        addedItem.quantity += 1;
        let updatedTotal = state.total + parseFloat(addedItem.price);
        return {
            ...state,
            addedItems: [...state.addedItems],
            total: updatedTotal,
        };
    }
    //subtractingqauntity
    if (action.type === SUB_QUANTITY) {
        let subtractedProduct = state.products.find(
            (product) => product.id === action.id
        );
        //if qt == 0 then product should be removed from cart
        if (subtractedProduct.quantity === 1) {
            let new_products = state.addedItems.filter(
                (product) => product.id !== action.id
            );
            let updatedTotal =
                state.total - parseFloat(subtractedProduct.price);
            return {
                ...state,
                addedItems: new_products,
                total: updatedTotal,
            };
        } else {
            subtractedProduct.quantity -= 1;
            let updatedTotal =
                state.total - parseFloat(subtractedProduct.price);
            return {
                ...state,
                addedItems: [...state.addedItems],
                total: updatedTotal,
            };
        }
    }

    //shipping
    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 200,
        };
    }
    if (action.type === SUB_SHIPPING) {
        return {
            ...state,
            total: state.total - 200,
        };
    }

    return state;
};

export default cartReducer;
