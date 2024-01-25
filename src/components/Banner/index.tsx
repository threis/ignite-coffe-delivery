import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import BannerImg from '../../assets/banner-image.svg'
import {
  BannerContainer,
  IconSvg,
  InfoContent,
  InvisibleSpace,
  LeftSideBox,
  RightSideBox,
} from './styles'

export function Banner() {
  return (
    <>
      <InvisibleSpace />
      <BannerContainer>
        <LeftSideBox>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <InfoContent>
            <div>
              <IconSvg variant="yellowDark">
                <ShoppingCart weight="fill" />
              </IconSvg>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <IconSvg variant="black">
                <Package weight="fill" />
              </IconSvg>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <IconSvg variant="yellow">
                <Timer weight="fill" />
              </IconSvg>
              <p>Entrega rápida e rastreada</p>
            </div>

            <div>
              <IconSvg variant="purple">
                <Coffee weight="fill" />
              </IconSvg>
              <p>O café chega fresquinho até você</p>
            </div>
          </InfoContent>
        </LeftSideBox>
        <RightSideBox>
          <img src={BannerImg} alt="" />
        </RightSideBox>
      </BannerContainer>
    </>
  )
}
