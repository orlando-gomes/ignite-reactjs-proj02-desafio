import { createContext, ReactNode, useState } from 'react'

interface CartContextType {
  cartItem: string[]
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItem] = useState(['Ola'])

  return (
    <CartContext.Provider
      value={{
        cartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
