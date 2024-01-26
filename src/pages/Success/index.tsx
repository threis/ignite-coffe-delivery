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
import { CartContext } from '../../contexts/CartContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export function Success() {
  const { customerAddress, paymentForm } = useContext(CartContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!customerAddress.address || !paymentForm.paymentType) {
      navigate('/')
    }
  }, [navigate, customerAddress.address, paymentForm.paymentType])

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
                  <strong>{`${customerAddress.address}, ${customerAddress.adressNumber} `}</strong>
                </p>
                <p>{`${customerAddress.neighborhood} - ${customerAddress.city}, ${customerAddress.state}`}</p>
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
                <strong>{paymentForm.paymentType}</strong>
              </div>
            </Info>
          </DeliveryInfo>
        </BorderWrapper>
        <img src={Illustration} alt="" />
      </DeliveryContainer>
    </Container>
  )
}
