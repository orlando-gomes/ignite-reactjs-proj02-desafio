import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../contexts/CartContext'

import {
  Amount,
  AmountButton,
  CartButton,
  CoffeeItemContainer,
  CoffeeTags,
  Description,
  Panel,
  Price,
  Tag,
  Title,
} from './styles'

export interface CoffeeItemInterface {
  id: number
  image: string
  tagList: string[]
  title: string
  description: string
  price: number
}

export function CoffeeItem({
  id,
  image,
  tagList,
  title,
  description,
  price,
}: CoffeeItemInterface) {
  const { addToCart } = useContext(CartContext)

  const [amount, setAmount] = useState(1)

  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function handleIncreaseAmount() {
    setAmount(amount + 1)
  }

  function handleDecreaseAmount() {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  function handleAddToCart(itemId: number) {
    addToCart({ id: itemId, amount })
  }

  return (
    <CoffeeItemContainer>
      <img src={image} alt="Imagem do café" />
      <CoffeeTags>
        {tagList.map((tagItem) => (
          <Tag key={tagList.indexOf(tagItem)}>{tagItem}</Tag>
        ))}
      </CoffeeTags>

      <Title>{title}</Title>
      <Description>{description}</Description>
      <Panel>
        <Price>{formattedPrice}</Price>
        <span>
          <Amount>
            <AmountButton onClick={handleDecreaseAmount}>
              <Minus size={14} weight="bold" />
            </AmountButton>
            <span>{amount}</span>
            <AmountButton onClick={handleIncreaseAmount}>
              <Plus size={14} weight="bold" />
            </AmountButton>
          </Amount>
          <CartButton
            title="Adicionar ao carrinho"
            onClick={() => {
              handleAddToCart(id)
            }}
          >
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </span>
      </Panel>
    </CoffeeItemContainer>
  )
}
