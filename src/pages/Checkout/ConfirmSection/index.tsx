import { Trash } from '@phosphor-icons/react'
import {
  CoffeeRemoveButton,
  ConfirmCoffeeItem,
  ConfirmCoffeeList,
  ConfirmSectionContainer,
  NameAndControls,
  SubTotal,
  Total,
} from './styles'

import { QuantityVariator } from '../../../components/QuantityVariator'
import { useContext, useEffect, useMemo, useState } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { coffeeListData } from '../../../data/CoffeeData'
import { CoffeeItemInterface } from '../../Home/CoffeeItem'
import { CartItem } from '../../../reducers/cart/reducer'

interface CartItemCompleteData extends CoffeeItemInterface {
  amount: number
}

export function ConfirmSection() {
  const { cartItems, updateCartItem, deleteCartItem } = useContext(CartContext)

  const [cartItemsCompleteData, setCartItemsCompleteData] = useState(
    [] as CartItemCompleteData[],
  )
  // colocar a quantidade no array

  useEffect(() => {
    const auxiliarArray = [] as CartItemCompleteData[]
    // cartItems[0].amount
    cartItems.forEach((cartItem) => {
      const coffeeListDataItemFound = coffeeListData.find(
        (coffeeListDataItem) => {
          return coffeeListDataItem.id === cartItem.id
        },
      )

      if (coffeeListDataItemFound) {
        auxiliarArray.push({
          ...coffeeListDataItemFound,
          amount: cartItem.amount,
        })
      }
    })

    setCartItemsCompleteData(auxiliarArray)
  }, [cartItems])

  function getCartItemCompleteDataById(id: number) {
    return cartItemsCompleteData.find((cartItemComplData) => {
      return cartItemComplData.id === id
    })
  }

  function handleIncreaseCartItemAmount(cartItemId: number) {
    const cartItemCompleteData = getCartItemCompleteDataById(cartItemId)
    if (cartItemCompleteData) {
      const updatedCartItem = {
        id: cartItemCompleteData.id,
        amount: cartItemCompleteData.amount + 1,
      } as CartItem

      updateCartItem(updatedCartItem)
    }
  }

  function handleDecreaseCartItemAmount(cartItemId: number) {
    const cartItemCompleteData = getCartItemCompleteDataById(cartItemId)
    if (cartItemCompleteData && cartItemCompleteData.amount > 1) {
      const updatedCartItem = {
        id: cartItemCompleteData.id,
        amount: cartItemCompleteData.amount - 1,
      } as CartItem

      updateCartItem(updatedCartItem)
    }
  }

  function getCartItemPrice(cartItem: CartItemCompleteData): number {
    return cartItem.price * cartItem.amount
  }

  function getFormattedCurrency(value: number) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  const subTotal = useMemo(() => {
    const result = cartItemsCompleteData.reduce(
      (total, cartItemCompleteData) => {
        const { amount: itemAmount, price: itemPrice } = cartItemCompleteData
        return (total = total + itemAmount * itemPrice)
      },
      0,
    )
    return result
  }, [cartItemsCompleteData])

  const total = subTotal + 3.5

  return (
    <ConfirmSectionContainer>
      <ConfirmCoffeeList>
        {cartItemsCompleteData.map((cartItemCompleteData) => (
          <ConfirmCoffeeItem key={cartItemCompleteData.id}>
            <div>
              <img src={cartItemCompleteData.image} alt="tradicional" />

              <NameAndControls>
                <span>{cartItemCompleteData.title}</span>
                <div>
                  <QuantityVariator
                    functionToIncreaseQuantity={() => {
                      handleIncreaseCartItemAmount(cartItemCompleteData.id)
                    }}
                    functionToDecreaseQuantity={() => {
                      handleDecreaseCartItemAmount(cartItemCompleteData.id)
                    }}
                    quantity={cartItemCompleteData.amount}
                  />
                  <CoffeeRemoveButton
                    type="button"
                    onClick={() => {
                      deleteCartItem(cartItemCompleteData.id)
                    }}
                  >
                    <Trash size={16} />
                    <span>REMOVER</span>
                  </CoffeeRemoveButton>
                </div>
              </NameAndControls>
            </div>

            <div>
              {getFormattedCurrency(getCartItemPrice(cartItemCompleteData))}
            </div>
          </ConfirmCoffeeItem>
        ))}
      </ConfirmCoffeeList>

      <SubTotal>
        <span>Total de itens</span>
        <span>{getFormattedCurrency(subTotal)}</span>
      </SubTotal>

      <SubTotal>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </SubTotal>

      <Total>
        <span>Total</span>
        <span>{getFormattedCurrency(total)}</span>
      </Total>

      <button type="submit">CONFIRMAR PEDIDO</button>
    </ConfirmSectionContainer>
  )
}
