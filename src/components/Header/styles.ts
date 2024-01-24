import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
`

export const CheckoutController = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    height: 2.375rem;
    gap: 0.25rem;

    background-color: ${(props) => props.theme['purple-light']};
    border-radius: 6px;

    p {
      color: ${(props) => props.theme['purple-dark']};
      font-size: 0.875rem;
    }

    svg {
      color: ${(props) => props.theme.purple};
      width: 1.375rem;
      height: 1.375rem;
    }
  }

  button {
    width: 2.375rem;
    height: 2.375rem;
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 6px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
      width: 1.375rem;
      height: 1.375rem;
    }
  }
`
