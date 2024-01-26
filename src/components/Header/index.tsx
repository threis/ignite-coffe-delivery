import { MapPin } from 'phosphor-react'
import { CheckoutController, HeaderContainer } from './styles'
import LogoImg from '../../assets/logo.svg'
import { CartButton } from '../CartButton'
import { NavLink, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const location = useLocation()

  const { getAmountItensInCart } = useContext(CartContext)

  const counterAmount = getAmountItensInCart()

  return (
    <HeaderContainer isFixedPosition={location.pathname === '/'}>
      <NavLink to="/" title="Home page">
        <img src={LogoImg} alt="" />
      </NavLink>
      <CheckoutController>
        <span>
          <MapPin weight="fill" />
          <p>Porto Alegre, RS</p>
        </span>
        <NavLink to="/checkout" title="Checkout page">
          <CartButton variant="yellow" counterAmount={counterAmount} />
        </NavLink>
      </CheckoutController>
    </HeaderContainer>
  )
}
