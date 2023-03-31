import { ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.div`
  form {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    header {
      font-size: 1.25rem;
      font-family: 'Baloo 2';
      font-weight: bold;
      color: ${(props) => props.theme.color['base-subtitle']};
    }

    main {
      flex: 1;
    }

    aside {
      margin-left: 2rem;
    }
  }
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.color['base-card']};
`

export const AddressSection = styled(Section)`
  svg {
    color: ${(props) => props.theme.color['yellow-dark']};
  }

  & > div:first-child {
    display: flex;
    gap: 0.5rem;
  }

  & > div:first-child + div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    & > div {
      display: flex;
      gap: 1rem;
    }
  }
`

export const AddressTopText = styled.div`
  margin-bottom: 2rem;

  & > div:first-child {
    color: ${(props) => props.theme.color['base-subtitle']};
    font-size: 1rem;
  }

  & > div:nth-child(2) {
    color: ${(props) => props.theme.color['base-text']};
    font-size: 0.875rem;
  }
`

const BaseInput = styled.input`
  background-color: ${(props) => props.theme.color['base-button']};

  color: ${(props) => props.theme.color['base-text']};

  border: none;
  border-radius: 4px;
  height: 2.65rem;
  width: 12.5rem;
  padding: 0.75rem;
  font-size: 0.875rem;

  &::placeholder {
    color: ${(props) => props.theme.color['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.color['yellow-dark']};
  }
`

export const CEPInput = styled(BaseInput)``

export const StreetInput = styled(BaseInput)`
  width: 100%;
`

export const NumberInput = styled(BaseInput)``

export const ComplementInput = styled(BaseInput)`
  flex: 1;
  &::placeholder {
    text-align: justify;
  }
`

export const DistrictInput = styled(BaseInput)``

export const CityInput = styled(BaseInput)`
  flex: 1;
`

export const StateInput = styled(BaseInput)`
  width: 5rem;
`

export const PaySection = styled(Section)`
  margin-top: 0.75rem;

  & > div {
    display: flex;
  }

  & > div:first-child {
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme.color.purple};
    }
  }

  & > div:nth-child(2) {
    gap: 0.75rem;
    width: 100%;
  }
`
export const PayTitle = styled.div`
  margin-bottom: 2rem;

  & > div:first-child {
    color: ${(props) => props.theme.color['base-subtitle']};
    font-size: 1rem;
  }

  & > div:nth-child(2) {
    color: ${(props) => props.theme.color['base-text']};
    font-size: 0.875rem;
  }
`

interface PayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean
}

export const PayButton = styled.button<PayButtonProps>`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  gap: 0.75rem;
  height: 3.1875rem;
  border: ${(props) =>
    props.selected ? css`1px solid${props.theme.color.purple}` : css`none`};
  border-radius: 6px;
  background-color: ${(props) =>
    props.selected
      ? props.theme.color['purple-light']
      : props.theme.color['base-button']};
  color: ${(props) => props.theme.color['base-text']};
  font-size: 0.75rem;

  transition: 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.selected
        ? props.theme.color['purple-light']
        : props.theme.color['base-hover']};
    color: ${(props) => props.theme.color['base-subtitle']};
  }

  & > svg {
    color: ${(props) => props.theme.color.purple};
  }
`

export const ConfirmSection = styled(Section)``
