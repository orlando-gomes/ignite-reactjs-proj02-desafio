import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  background-color: ${(props) => props.theme.color['base-card']};
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem;

  & > img {
    width: 120px;
    margin: -1.25rem 0 0.75rem;
  }
`
export const CoffeeTags = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`

export const Tag = styled.div`
  background-color: ${(props) => props.theme.color['yellow-light']};
  color: ${(props) => props.theme.color['yellow-dark']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: bold;
`

export const Title = styled.div`
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  color: ${(props) => props.theme.color['base-subtitle']};
  margin-bottom: 0.5rem;
`
export const Description = styled.div`
  color: ${(props) => props.theme.color['base-label']};
  font-size: 0.875rem;
  text-align: center;
  margin-bottom: 2rem;
`

export const Panel = styled.div`
  width: 100%;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span:last-of-type {
    display: flex;
    align-items: center;

    & > div {
      height: 2.375rem;
    }
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  transition: background-color 0.2s;
  cursor: pointer;
`

export const Price = styled.span`
  color: ${(props) => props.theme.color['base-text']};
  font-size: 1.5rem;
  font-family: 'Baloo 2';
`

export const CartButton = styled(Button)`
  margin-left: 0.5rem;
  background-color: ${(props) => props.theme.color['purple-dark']};
  color: ${(props) => props.theme.color['base-card']};
  width: 2.375rem;
  height: 2.375rem;

  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme.color.purple};
  }
`
