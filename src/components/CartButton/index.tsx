import { Check, ShoppingCart } from 'phosphor-react'
import { Button } from './styles'
import { ButtonHTMLAttributes } from 'react'

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'purple' | 'yellow'
  counterAmount?: number
  isAnimationOn?: boolean
}

export function CartButton({
  variant,
  counterAmount = 0,
  isAnimationOn = false,
  ...rest
}: CartButtonProps) {
  return (
    <Button type="button" variant={variant} counter={counterAmount} {...rest}>
      {isAnimationOn ? (
        <Check weight="fill" size={22} />
      ) : (
        <ShoppingCart weight="fill" />
      )}
    </Button>
  )
}
