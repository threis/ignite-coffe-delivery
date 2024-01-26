import { Minus, Plus } from 'phosphor-react'
import { CounterController } from './styles'

interface CounterButtonProps {
  height: string
  amount: number
  addCounterAmount: () => void | undefined
  subtractCounterAmount: () => void | undefined
}

export function CounterButton({
  height,
  amount,
  addCounterAmount,
  subtractCounterAmount,
}: CounterButtonProps) {
  function handleSubtractAmount() {
    subtractCounterAmount()
  }

  function handleAddAmount() {
    addCounterAmount()
  }

  return (
    <CounterController height={height}>
      <button onClick={handleSubtractAmount}>
        <Minus />
      </button>
      <span>{amount}</span>
      <button onClick={handleAddAmount}>
        <Plus />
      </button>
    </CounterController>
  )
}
