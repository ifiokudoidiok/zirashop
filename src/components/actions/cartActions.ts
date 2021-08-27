import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from './action-types/cart-actions'
import { ADD_TO_FAVE, REMOVE_FAVE} from './action-types/fave-actions'

//add cart action
export const addToCart= (id: any)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id: any)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id: any)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id: any)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
//add fave action
export const addFave=(id: any)=>{
    return{
        type: ADD_TO_FAVE,
        id
    }
}
//remove fave action
export const removeFave=(id: any)=>{
    return{
        type: REMOVE_FAVE,
        id
    }
}