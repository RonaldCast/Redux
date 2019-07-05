// para crear el store 
import {createStore} from 'redux'

//Funcion reductora 
const reducer = (state, action) =>{
    if(action.type === "ADD_TO_CART"){
        return{
            ...state,
            cart:state.cart.concat(action.product)
            
        }
    }
    if(action.type === 'REMOVE_FROM_CART'){
        return {
          ...state,
          cart: state.cart.filter(product => product.id != action.product.id)
        };
        
    }
    return state
}

let state = {
    cart:[]
}

//se pasa el reducer y el estaod inicia; 
export default createStore(reducer, state);