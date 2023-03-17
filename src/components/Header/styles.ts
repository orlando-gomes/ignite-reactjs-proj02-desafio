import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: #fafafa;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

interface LocationAndCartContainerProps {
  cartNumberOfItems: number
}

export const LocationAndCartContainer = styled.div<LocationAndCartContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${(props) => props.theme.color.purple};

  div {
    background-color: ${(props) => props.theme.color['purple-light']};
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.375rem;
    gap: 4px;
    padding: 0 0.5rem;

    font-size: 0.875rem;
    border-radius: 6px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.375rem;
    width: 2.375rem;
    background-color: ${(props) => props.theme.color['yellow-light']};
    color: ${(props) => props.theme.color['yellow-dark']};
    border: none;
    border-radius: 6px;

    cursor: pointer;

    &::after {
      content: '${(props) => props.cartNumberOfItems}';
      visibility: ${(props) =>
        props.cartNumberOfItems > 0 ? 'visible' : 'hidden'};
      float: left;
      position: absolute;
      margin: -2rem -2rem 0 0;
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${(props) => props.theme.color['yellow-dark']};
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      color: ${(props) => props.theme.color.white};
    }
  }
`
