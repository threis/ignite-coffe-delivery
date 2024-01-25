import {
  CounterController,
  BuyOptions,
  CoffeeCard,
  CoffeeGridContainer,
  GridContainer,
  ImageContainer,
  TagsInfo,
} from './styles'
import coffees from '../../../db.json'
import { CartButton } from '../../../components/CartButton'
import { formatBRLCurrency } from '../../../utils/formatCurrency'
import { Minus, Plus } from 'phosphor-react'

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
                  <CounterController>
                    <button>
                      <Minus />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus />
                    </button>
                  </CounterController>
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
