import produce from 'immer'

import { ActionTypes } from './actions'
import { CheckoutFormData } from '../../pages/Checkout'

export type payType = 'credit' | 'debit' | 'money'
export interface CartItem {
  id: number
  amount: number
}

interface CartState {
  cartItems: CartItem[]
  payMethod: payType
  clientData: CheckoutFormData
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.cartItems.push(action.payload.item as CartItem)
      })
    case ActionTypes.UPDATE_CART_ITEM:
      return produce(state, (draft) => {
        const cartItemFound = draft.cartItems.find((cartItem) => {
          return cartItem.id === action.payload.item.id
        })

        if (cartItemFound) {
          cartItemFound.amount = action.payload.item.amount
        }
      })
    case ActionTypes.DELETE_CART_ITEM:
      return produce(state, (draft) => {
        draft.cartItems = draft.cartItems.filter((item) => {
          return item.id !== action.payload.itemId
        })
      })
    case ActionTypes.UPDATE_PAYMENT_METHOD:
      return produce(state, (draft) => {
        draft.payMethod = action.payload.payMethod
      })
    case ActionTypes.UPDATE_CLIENT_DATA:
      return produce(state, (draft) => {
        draft.clientData = action.payload.clientData
      })
    default:
      return state
  }
}
