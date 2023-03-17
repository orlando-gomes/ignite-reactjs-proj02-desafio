import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  transition: background-color 0.2s;
  cursor: pointer;
`

export const QuantityVariatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color['base-button']};

  width: 4.5rem;
  height: 100%;

  border-radius: 6px;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme.color['base-title']};
    margin: 0 0.25rem;
  }
`

export const AmountButton = styled(Button)`
  background-color: transparent;
  color: ${(props) => props.theme.color.purple};

  border-radius: 6px;

  &:hover {
    color: ${(props) => props.theme.color['purple-dark']};
  }
`
