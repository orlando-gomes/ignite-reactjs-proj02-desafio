import { createContext, ReactNode, useReducer } from 'react'
import { ActionTypes } from '../reducers/cart/actions'
import { CartItem, cartReducer } from '../reducers/cart/reducer'

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartItems: [] as CartItem[],
  })

  const { cartItems } = cartState

  function addToCart(item: CartItem) {
    dispatch({ type: ActionTypes.ADD_TO_CART, payload: { item } })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
