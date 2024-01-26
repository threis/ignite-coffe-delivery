import { ShoppingCart } from 'phosphor-react'
import { Button } from './styles'
import { ButtonHTMLAttributes } from 'react'

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'purple' | 'yellow'
  counterAmount?: number
}

export function CartButton({
  variant,
  counterAmount = 0,
  ...rest
}: CartButtonProps) {
  return (
    <Button type="button" variant={variant} counter={counterAmount} {...rest}>
      <ShoppingCart weight="fill" />
    </Button>
  )
}
