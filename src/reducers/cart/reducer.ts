import { ActionTypes } from './actions'

export interface CartItem {
  id: number
  amount: number
}

interface CartState {
  cartItems: CartItem[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        cartItems: [...state.cartItems, action.payload.item],
      }

    default:
      return state
  }
}
