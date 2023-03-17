import styled from 'styled-components'

export const ConfirmSectionContainer = styled.section`
  width: 28rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.color['base-card']};

  & > div {
    width: 100%;
  }

  & > button {
    margin-top: 1.5rem;
    border: none;
    border-radius: 6px;
    width: 100%;
    height: 2.875rem;
    background-color: ${(props) => props.theme.color.yellow};

    color: ${(props) => props.theme.color.white};
    font-size: 0.875rem;
    font-weight: bold;

    transition: 0.2s;

    &:hover {
      background-color: ${(props) => props.theme.color['yellow-dark']};
    }
  }
`
export const ConfirmCoffeeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ConfirmCoffeeItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 2px solid ${(props) => props.theme.color['base-button']};

  & > div:first-child {
    display: flex;
    & > img {
      width: 4rem;
      height: 4rem;
    }
  }

  & > div + div {
    color: ${(props) => props.theme.color['base-text']};
    font-size: 1rem;
    font-weight: bold;
  }
`

export const NameAndControls = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;

  & > span {
    font-size: 1rem;
    color: ${(props) => props.theme.color['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const CoffeeRemoveButton = styled.button`
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.color['base-button']};
  color: ${(props) => props.theme.color['base-text']};
  font-size: 0.75rem;
  padding: 0.4rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  transition: 0.2s;

  & > svg {
    color: ${(props) => props.theme.color.purple};
    transition: 0.2s;
  }

  &:hover {
    background-color: ${(props) => props.theme.color['base-hover']};
    color: ${(props) => props.theme.color['base-subtitle']};

    & > svg {
      color: ${(props) => props.theme.color['purple-dark']};
    }
  }
`

export const SubTotal = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.color['base-text']};
  font-size: 0.875rem;
`

export const Total = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.color['base-subtitle']};
  font-size: 1.25rem;
  font-weight: bold;
`
