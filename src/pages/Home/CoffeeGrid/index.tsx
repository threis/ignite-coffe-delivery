import { CoffeeGridContainer, GridContainer } from './styles'
import coffees from '../../../db.json'
import { CoffeeCard } from '../CoffeeCard'

export function CoffeeGrid() {
  return (
    <CoffeeGridContainer>
      <h2>Nossos Cafés</h2>
      <GridContainer>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.name}
            image={coffee.image}
            name={coffee.name}
            price={coffee.price}
            description={coffee.description}
            tags={coffee.tags}
          />
        ))}
      </GridContainer>
    </CoffeeGridContainer>
  )
}
