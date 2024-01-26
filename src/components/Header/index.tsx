import { MapPin } from 'phosphor-react'
import { CheckoutController, HeaderContainer } from './styles'
import LogoImg from '../../assets/logo.svg'
import { CartButton } from '../CartButton'
import { useLocation } from 'react-router-dom'

export function Header() {
  const location = useLocation()
  return (
    <HeaderContainer isFixedPosition={location.pathname === '/'}>
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
