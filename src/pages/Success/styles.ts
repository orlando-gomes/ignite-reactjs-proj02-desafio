import styled from 'styled-components'

export const SuccessContainer = styled.main`
  h1 {
    color: ${(props) => props.theme.color['yellow-dark']};
    font-size: 2rem;
    font-weight: bold;
  }

  & > p {
    color: ${(props) => props.theme.color['base-subtitle']};
    font-size: 1.25rem;
    margin-top: 0.25rem;
  }

  & > div {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
`

export const OrderInfo = styled.div`
  position: relative;
  margin-top: 2.5rem;
  padding: 2.5rem;
  background: white;
  border-radius: 6px 36px 6px 36px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.color['yellow-dark']},
      ${(props) => props.theme.color.purple}
    );
    z-index: -1;
    margin: -1px;
    border-radius: 6px 36px 6px 36px;
  }

  & > div + div {
    margin-top: 2rem;
  }
`
const Info = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color['base-text']};
  font-size: 1rem;

  image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  svg {
    color: ${(props) => props.theme.color.white};
  }

  & > div {
    margin-left: 0.75rem;

    & span {
      font-weight: bold;
    }
  }
`

export const Local = styled(Info)`
  image {
    background-color: ${(props) => props.theme.color.purple};
  }
`

export const Time = styled(Info)`
  image {
    background-color: ${(props) => props.theme.color.yellow};
  }
`

export const Payment = styled(Info)`
  image {
    background-color: ${(props) => props.theme.color['yellow-dark']};
  }
`
