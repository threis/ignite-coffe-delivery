import styled from 'styled-components'

interface CounterControllerProps {
  height: string
}

export const CounterController = styled.div<CounterControllerProps>`
  width: 4.5rem;
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.25rem;
  font-size: 1rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  button {
    background: transparent;
    border: none;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 0.875rem;
      width: 0.875rem;
    }

    svg:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    color: ${(props) => props.theme['base-title']};
  }
`
