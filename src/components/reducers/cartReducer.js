
import Item1 from '../../images/33.jpg'
import Item2 from '../../images/26.jpg'
import Item3 from '../../images/27.jpg'
import Item4 from '../../images/28.jpg'
import Item5 from '../../images/29.jpg'
import Item6 from '../../images/30.jpg'
import Item7 from '../../images/19.png'
import Item8 from '../../images/24.jpg'
import Item9 from '../../images/9.png'
import Item10 from '../../images/10.jpg'
import Item11 from '../../images/18.png'
import Item12 from '../../images/20.png'
import Item13 from '../../images/22.jpg'
import Item14 from '../../images/21.jpg'
import Item15 from '../../images/31.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action_types/cart-actions'
import '../../index.js'


const initState = {
    items: [
        {id:1,title:'nike', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:190,img:Item1,},
        {id:2,title:'nike ', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'nike', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'jordon', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'jordan', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6},
        {id:7,title:'huawei', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:2000,img: Item7},
        {id:8,title:'samsung', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:2200,img: Item8},
        {id:9,title:'apple', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:4000,img: Item9},
        {id:10,title:'macbook pro', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:7000,img: Item10},
        {id:11,title:'msi', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:3500,img: Item11},
        {id:12,title:'asus', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:4000,img: Item12},
        {id:13,title:'t-shirt', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:99 ,img: Item13},
        {id:14,title:'parfume', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:100,img: Item14},
        {id:15,title:'watch', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:40  ,img: Item15},
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
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
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
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
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
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