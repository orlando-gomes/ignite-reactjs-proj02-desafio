import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { CartContext } from '../../contexts/CartContext'

import { HeaderContainer, LocationAndCartContainer } from './styles'

export function Header() {
  const { cartItems } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="HomePage">
        <img src={logo} alt="logo" />
      </NavLink>

      <LocationAndCartContainer cartNumberOfItems={cartItems.length}>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <NavLink to="/checkout" title="Ir para o carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </LocationAndCartContainer>
    </HeaderContainer>
  )
}
