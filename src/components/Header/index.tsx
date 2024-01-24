import { MapPin, ShoppingCart } from 'phosphor-react'
import { CheckoutController, HeaderContainer } from './styles'
import LogoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoImg} alt="" />
      <CheckoutController>
        <span>
          <MapPin weight="fill" />
          <p>Porto Alegre, RS</p>
        </span>
        <button type="button">
          <ShoppingCart weight="fill" />
        </button>
      </CheckoutController>
    </HeaderContainer>
  )
}
