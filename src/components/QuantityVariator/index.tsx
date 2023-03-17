import { Minus, Plus } from '@phosphor-icons/react'
import { AmountButton, QuantityVariatorContainer } from './styles'

interface QuantityVariatorProps {
  functionToIncreaseQuantity: () => void
  functionToDecreaseQuantity: () => void
  quantity: number
}

export function QuantityVariator({
  functionToIncreaseQuantity,
  functionToDecreaseQuantity,
  quantity,
}: QuantityVariatorProps) {
  return (
    <QuantityVariatorContainer>
      <AmountButton onClick={functionToDecreaseQuantity} type="button">
        <Minus size={14} weight="bold" />
      </AmountButton>
      <span>{quantity}</span>
      <AmountButton onClick={functionToIncreaseQuantity} type="button">
        <Plus size={14} weight="bold" />
      </AmountButton>
    </QuantityVariatorContainer>
  )
}
