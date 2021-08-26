import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'
import brogues from "./../../images/brogues.jpg";
import trainers from "./../../images/trainers.jpg";
import sneakers from "./../../images/sneakers.jpg";
import heels from "./../../images/heels.jpg";
import nike from "./../../images/nike.jpg";
import boots from "./../../images/boots.jpg";


const initState = {
    items: [
        {id:1,title:'Brown Brogues', desc: "A pair of Brown Brogues.", price:110,img:brogues},
        {id:2,title:'Adidas', desc: "A pair of Adidas sneakers", price:80,img: sneakers},
        {id:3,title:'Trainers', desc: "A pair of Blue Trainers.",price:120,img: trainers},
        {id:4,title:'Red Heels', desc: "A pair of Red heels", price:260,img:heels},
        {id:5,title:'Cropped-sho', desc: "A pair of Nike Airforce", price:160,img: nike},
        {id:6,title:'Boots', desc: "A pair of Black Boots",price:90,img: boots}
    ],

    addedItems: [] as Array<any>[],
    total: 0

}
const cartReducer= (state = initState, action: any)=>{
  //INSIDE HOME COMPONENT
  if(action.type === ADD_TO_CART){
    let addedItem: any | undefined = state.items.find(item=> item.id === action.id)
    //check if the action id exists in the addedItems
   let existed_item= state.addedItems.find((item: any ) => action.id === item.id)
   if(existed_item)
   {
      addedItem.quantity += 1 
       return{
          ...state,
           total: state.total + addedItem.price 
            }
  }
   else{
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price 
      
      return{
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total : newTotal
      }
      
  }
}
if(action.type === REMOVE_ITEM){
  let itemToRemove: any = state.addedItems.find((item: any)=> action.id === item.id)
  let new_items: any = state.addedItems.filter((item: any)=> action.id !== item.id)
  
  //calculating the total
  let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
  console.log(itemToRemove)
  return{
      ...state,
      addedItems: new_items,
      total: newTotal
  }
}
//INSIDE CART COMPONENT
if(action.type=== ADD_QUANTITY){
  let addedItem: any = state.items.find(item=> item.id === action.id)
    addedItem.quantity += 1 
    let newTotal = state.total + addedItem.price
    return{
        ...state,
        total: newTotal
    }
}
if(action.type=== SUB_QUANTITY){  
  let addedItem: any = state.items.find((item: any)=> item.id === action.id) 
  //if the qt == 0 then it should be removed
  if(addedItem.quantity === 1){
      let new_items: any = state.addedItems.filter((item: any)=>item.id !== action.id)
      let newTotal: number = state.total - addedItem.price
      return{
          ...state,
          addedItems: new_items,
          total: newTotal
      }
  }
  else {
      addedItem.quantity -= 1
      let newTotal: number = state.total - addedItem.price
      return{
          ...state,
          total: newTotal
      }
  }
  
}

if(action.type=== ADD_SHIPPING){
    return{
        ...state,
        total: state.total + 6
    }
}

if(action.type=== 'SUB_SHIPPING'){
  return{
      ...state,
      total: state.total - 6
  }
}

else{
return state
}

}

export default cartReducer