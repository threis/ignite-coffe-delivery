import { ShoppingCart } from 'phosphor-react'
import { Button } from './styles'

interface CartButtonProps {
  variant: 'purple' | 'yellow'
  counterAmount?: number
}

export function CartButton({ variant, counterAmount = 0 }: CartButtonProps) {
  return (
    <Button type="button" variant={variant} counter={counterAmount}>
      <ShoppingCart weight="fill" />
    </Button>
  )
}
