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
