import { CounterButton } from '../../../components/CounterButton'
import { CartButton } from '../../../components/CartButton'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { BuyOptions, Container, ImageContainer, TagsInfo } from './styles'
import { formatBRLCurrency } from '../../../utils/formatCurrency'

const folderPath = ' /src/assets/coffees/'

interface CoffeeData {
  name: string
  price: number
  image: string
  quantity: number
}

interface CoffeCardProps {
  image: string
  name: string
  price: number
  description: string
  tags: string[]
}

export function CoffeeCard({
  image,
  name,
  price,
  description,
  tags,
}: CoffeCardProps) {
  const [counter, setCounter] = useState(1)
  const { addNewOrUpdateCartItem } = useContext(CartContext)

  const priceFormattedBRL = formatBRLCurrency(price)
  const [controlllerAddAnimation, setControlllerAddAnimation] = useState(false)

  function handleAddProductInCart({
    image,
    name,
    price,
    quantity,
  }: CoffeeData) {
    addNewOrUpdateCartItem({
      image,
      name,
      price,
      quantity,
    })

    setControlllerAddAnimation(true)
  }

  useEffect(() => {
    let timeout: number

    if (controlllerAddAnimation) {
      timeout = setTimeout(() => {
        setControlllerAddAnimation(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [controlllerAddAnimation])

  function subtractCounterAmount() {
    if (counter > 1) setCounter((state) => state - 1)
  }
  function addCounterAmount() {
    if (counter < 99) setCounter((state) => state + 1)
  }

  return (
    <Container key={name}>
      <ImageContainer>
        <img src={`${folderPath}${image}`} alt="" />
      </ImageContainer>
      <TagsInfo>
        {tags.length &&
          tags.map((tag) => {
            return <span key={tag}>{tag}</span>
          })}
      </TagsInfo>
      <h3>{name}</h3>
      <h4>{description}</h4>
      <BuyOptions>
        <p>{priceFormattedBRL}</p>
        <div>
          <CounterButton
            height="2.235rem"
            amount={counter}
            addCounterAmount={addCounterAmount}
            subtractCounterAmount={subtractCounterAmount}
          />
          <CartButton
            variant="purple"
            onClick={() =>
              handleAddProductInCart({ image, name, price, quantity: counter })
            }
            isAnimationOn={controlllerAddAnimation}
          />
        </div>
      </BuyOptions>
    </Container>
  )
}
