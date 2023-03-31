import { createContext, ReactNode, useReducer } from 'react'
import { ActionTypes } from '../reducers/cart/actions'
import { CartItem, cartReducer, payType } from '../reducers/cart/reducer'

interface CartContextType {
  cartItems: CartItem[]
  payMethod: payType
  addToCart: (item: CartItem) => void
  updateCartItem: (item: CartItem) => void
  findCartItem: (item: CartItem) => CartItem | null
  deleteCartItem: (itemId: number) => void
  updatePaymentMethod: (method: payType) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartItems: [
      {
        id: 1,
        amount: 5,
      },
      {
        id: 5,
        amount: 3,
      },
    ] as CartItem[],
    payMethod: 'credit',
  })

  const { cartItems, payMethod } = cartState

  function updateCartItem(item: CartItem) {
    dispatch({ type: ActionTypes.UPDATE_CART_ITEM, payload: { item } })
  }

  function findCartItem(item: CartItem): CartItem | null {
    const cartItemFound = cartItems.find((cartItem) => {
      return cartItem.id === item.id
    })

    if (cartItemFound) {
      return cartItemFound
    }
    return null
  }

  function addToCart(item: CartItem) {
    const cartItemFound = findCartItem(item)
    if (cartItemFound) {
      item.amount = item.amount + cartItemFound.amount
      updateCartItem(item)
    } else {
      dispatch({ type: ActionTypes.ADD_TO_CART, payload: { item } })
    }
  }

  function deleteCartItem(itemId: number) {
    dispatch({ type: ActionTypes.DELETE_CART_ITEM, payload: { itemId } })
  }

  function updatePaymentMethod(method: payType) {
    dispatch({
      type: ActionTypes.UPDATE_PAYMENT_METHOD,
      payload: { payMethod: method },
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        payMethod,
        addToCart,
        updateCartItem,
        findCartItem,
        deleteCartItem,
        updatePaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
