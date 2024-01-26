import {
  BuyOptions,
  CoffeeCard,
  CoffeeGridContainer,
  GridContainer,
  ImageContainer,
  TagsInfo,
} from './styles'
import coffees from '../../../db.json'
import { formatBRLCurrency } from '../../../utils/formatCurrency'
import { CounterButton } from '../../../components/CounterButton'
import { CartButton } from '../../../components/CartButton'

const folderPath = ' /src/assets/coffees/'

export function CoffeeGrid() {
  return (
    <CoffeeGridContainer>
      <h2>Nossos Cafés</h2>
      <GridContainer>
        {coffees.map((coffee) => {
          const priceFormattedBRL = formatBRLCurrency(coffee.price)
          return (
            <CoffeeCard key={coffee.name}>
              <ImageContainer>
                <img src={`${folderPath}${coffee.image}`} alt="" />
              </ImageContainer>
              <TagsInfo>
                {coffee.tags.length &&
                  coffee.tags.map((tag) => {
                    return <span key={tag}>{tag}</span>
                  })}
              </TagsInfo>
              <h3>{coffee.name}</h3>
              <h4>{coffee.description}</h4>
              <BuyOptions>
                <p>{priceFormattedBRL}</p>
                <div>
                  <CounterButton height="2.235rem" />
                  <CartButton variant="purple" />
                </div>
              </BuyOptions>
            </CoffeeCard>
          )
        })}
      </GridContainer>
    </CoffeeGridContainer>
  )
}
