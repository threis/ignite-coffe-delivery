import { MapPin } from 'phosphor-react'
import { CheckoutController, HeaderContainer } from './styles'
import LogoImg from '../../assets/logo.svg'
import { CartButton } from '../CartButton'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoImg} alt="" />
      <CheckoutController>
        <span>
          <MapPin weight="fill" />
          <p>Porto Alegre, RS</p>
        </span>
        <CartButton variant="yellow" />
      </CheckoutController>
    </HeaderContainer>
  )
}
