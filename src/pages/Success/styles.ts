import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 5rem 10rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }

  & > p {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`

export const DeliveryContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: space-between;
  gap: 6.375rem;

  img {
    width: 30.75rem;
    height: 18.375rem;
  }
`

export const BorderWrapper = styled.div`
  min-width: 32.875rem;
  padding: 1px;
  border-radius: 6px 36px 6px 36px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
`

export const DeliveryInfo = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > div {
    display: flex;
    flex-direction: column;

    p,
    strong {
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
    }

    strong {
      font-weight: 700;
    }
  }
`

const ICON_COLOR = {
  purple: 'purple',
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
}

interface IconProps {
  variant: 'purple' | 'yellow' | 'yellowDark'
}

export const Icon = styled.span<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${(props) => props.theme[ICON_COLOR[props.variant]]};
  color: ${(props) => props.theme.white};

  svg {
    font-size: 1rem;
  }
`
