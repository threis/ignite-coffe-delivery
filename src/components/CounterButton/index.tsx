import { Minus, Plus } from 'phosphor-react'
import { CounterController } from './styles'

interface CounterButtonProps {
  height: string
}

export function CounterButton({ height }: CounterButtonProps) {
  return (
    <CounterController height={height}>
      <button>
        <Minus />
      </button>
      <span>1</span>
      <button>
        <Plus />
      </button>
    </CounterController>
  )
}
