import styled from 'styled-components'
import backgroundSvg from '../../assets/background.svg'

export const InvisibleSpace = styled.div`
  height: 6.25rem;
`

export const BannerContainer = styled.div`
  width: 100%;
  height: 34rem;

  display: flex;
  justify-content: space-between;
  padding: 5.875rem 10rem;

  background-image: url(${backgroundSvg});
  background-repeat: no-repeat;
  background-size: cover;
`

export const LeftSideBox = styled.div`
  max-width: 36.75rem;

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Baloo 2';
  }

  p {
    font-size: 1.25rem;
  }
`

export const InfoContent = styled.div`
  margin-top: 4.125rem;
  max-width: 35.4375rem;

  display: grid;
  grid-template-columns: 14.4375rem 20rem;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
      font-size: 1rem;
    }
  }
`

const ICON_COLOR = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  purple: 'purple',
  black: 'base-text',
}

interface IconSvgProps {
  variant: keyof typeof ICON_COLOR
}

export const IconSvg = styled.span<IconSvgProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: ${(props) => props.theme[ICON_COLOR[props.variant]]};
  border-radius: 50%;

  svg {
    color: ${(props) => props.theme.white};
  }
`

export const RightSideBox = styled.div`
  width: 28rem;
  height: 22.5rem;
`
