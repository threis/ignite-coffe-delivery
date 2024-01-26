import styled, { css } from 'styled-components'

export const CheckoutFormContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 2rem;
  padding: 2.5rem 10rem;
`

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    font-weight: bold;
  }
`

export const CustomerInfoContainer = styled(BaseContainer)`
  flex: 1;
`

const BaseBox = styled.div`
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  header {
    display: flex;
    gap: 0.5rem;

    svg {
      width: 1.375rem;
      height: 1.375rem;
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
    }

    h3 {
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const AddressBox = styled(BaseBox)`
  width: 100%;
  height: 23.25rem;
  flex: 1;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  & > div {
    display: flex;
    gap: 0.75rem;
  }
`

interface InputProps {
  width: string
}

export const Input = styled.input<InputProps>`
  width: ${(props) => props.width};

  background: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  color: ${(props) => props.theme['base-text']};
  padding: 0.75rem;
  height: 2.625rem;
  border: 1px solid ${(props) => props.theme['base-button']};

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
  }
`

interface OptionalInputBoxProps {
  width: string
}

export const OptionalInputBox = styled.div<OptionalInputBoxProps>`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  position: relative;

  &:focus-within {
    label {
      visibility: hidden;
    }
  }

  label {
    position: absolute;
    right: 0.75rem;
    font-style: italic;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const PaymentBox = styled(BaseBox)`
  width: 100%;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const SelectPaymentBox = styled.div`
  display: flex;
  width: 100%;
  gap: 0.75rem;
  margin-top: 2rem;
`

interface PaymentOptionProps {
  isChecked: boolean
}

export const PaymentOption = styled.label<PaymentOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex: 1 1 0;
  transition: background-color 0.1s;
  cursor: pointer;

  padding: 1rem;
  border-radius: 6px;

  font-size: 0.75rem;
  line-height: 1.6;

  ${(props) => {
    if (props.isChecked) {
      return css`
        background: ${(props) => props.theme['purple-light']};
        border: 2px solid ${(props) => props.theme.purple};
      `
    } else {
      return css`
        background: ${(props) => props.theme['base-card']};
        border: 2px solid transparent;
      `
    }
  }}

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    ${(props) => {
      if (!props.isChecked) {
        return css`
          background: ${(props) => props.theme['base-hover']};
        `
      }
    }}
  }

  input[type='radio'] {
    display: none;
  }
`
export const CartContainer = styled(BaseContainer)`
  width: 28rem;
`

export const CartInfo = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;
`
export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme['base-button']};
  margin: 1.5rem 0;
`

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 4rem;
    height: 4rem;
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-weight: 700;
  }
`

export const CartItemContent = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1rem;
    }
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const RemoveButton = styled.button`
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  padding: 0.5rem;
  border: none;
  cursor: pointer;

  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  font-size: 0.75rem;
  border-radius: 6px;

  transition: background-color 0.1s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const CartDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['base-text']};

    p {
      font-size: 0.875rem;
    }

    span {
      font-size: 1rem;
    }

    strong {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      font-weight: 700;
    }
  }

  button {
    width: 100%;
    height: 2.875rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;
    margin-top: 2rem;

    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    border-radius: 6px;
    border: none;

    font-size: 0.875rem;
    transition: background-color 0.1s;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
