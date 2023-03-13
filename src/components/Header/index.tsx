import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'

import { HeaderContainer, LocationAndCartContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <LocationAndCartContainer>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <button title="Ir para o carrinho">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </LocationAndCartContainer>
    </HeaderContainer>
  )
}
