import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

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
  image: string
  tagList: string[]
  title: string
  description: string
  price: number
}

export function CoffeeItem({
  image,
  tagList,
  title,
  description,
  price,
}: CoffeeItemInterface) {
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
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
            <AmountButton>
              <Minus size={14} weight="bold" />
            </AmountButton>
            <span>1</span>
            <AmountButton>
              <Plus size={14} weight="bold" />
            </AmountButton>
          </Amount>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </span>
      </Panel>
    </CoffeeItemContainer>
  )
}
