import styled from 'styled-components'

export const CoffeeGridContainer = styled.div`
  width: 100%;
  padding: 2rem 10rem;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const GridContainer = styled.div`
  margin-top: 3.375rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
`
export const CoffeeCard = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;

  h3 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};

    display: inline-block;
    max-width: 13.5rem;
    margin-top: 1rem;
  }

  h4 {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-label']};

    display: inline-block;
    margin-top: 0.5rem;
    max-width: 13.5rem;
  }
`

export const ImageContainer = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -20px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const TagsInfo = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.625rem;
    font-weight: 700;
  }
`

export const BuyOptions = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4375rem;

  p {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
  }

  p::before {
    content: 'R$ ';
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`

export const CounterController = styled.div`
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
  }

  span {
    color: ${(props) => props.theme['base-title']};
  }
`
