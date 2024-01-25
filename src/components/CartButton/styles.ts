import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: 'yellow' | 'purple'
  counter: number
}

export const Button = styled.button<ButtonProps>`
  position: relative;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  cursor: pointer;
  ${(props) => {
    if (props.variant === 'yellow') {
      return css`
        background: ${props.theme['yellow-light']};
        svg {
          color: ${(props) => props.theme['yellow-dark']};
        }
        &:focus {
          outline: 0;
          box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
        }
      `
    } else if (props.variant === 'purple') {
      return css`
        background: ${props.theme['purple-dark']};
        transition: background-color 0.2s;
        svg {
          color: ${(props) => props.theme.white};
        }
        &:hover {
          background: ${props.theme.purple};
        }
      `
    }
  }};

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }

  ${(props) => {
    if (Number(props.counter) > 0) {
      const counter = props.counter
      return css`
        &::after {
          content: ${`'${counter}'`};
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          font-size: 0.75rem;
          font-weight: 700;
          top: -10px;
          right: -10px;
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          background: ${(props) => props.theme['yellow-dark']};
          color: ${(props) => props.theme.white};
        }
      `
    }
  }}
`
