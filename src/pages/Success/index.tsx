import {
  BorderWrapper,
  Container,
  DeliveryContainer,
  DeliveryInfo,
  Icon,
  Info,
} from './styles'

import Illustration from '../../assets/Illustration.svg'
import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'
export function Success() {
  return (
    <Container>
      <header>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <DeliveryContainer>
        <BorderWrapper>
          <DeliveryInfo>
            <Info>
              <Icon variant="purple">
                <MapPin weight="fill" />
              </Icon>
              <div>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102 </strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </Info>
            <Info>
              <Icon variant="yellow">
                <Timer weight="fill" />
              </Icon>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </Info>
            <Info>
              <Icon variant="yellowDark">
                <CurrencyDollar />
              </Icon>
              <div>
                <p>Pagamento na entrega</p>
                <strong>Cartão de Crédito</strong>
              </div>
            </Info>
          </DeliveryInfo>
        </BorderWrapper>
        <img src={Illustration} alt="" />
      </DeliveryContainer>
    </Container>
  )
}
