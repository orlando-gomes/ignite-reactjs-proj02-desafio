import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: #fafafa;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-left: 160px;
  }
`

export const LocationAndCartContainer = styled.div`
  margin-right: 160px;
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
    padding: 0 8px;

    font-size: 14px;
    border-radius: 6px;
  }

  div + div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.375rem;
    width: 2.375rem;
    background-color: ${(props) => props.theme.color['yellow-light']};
    color: ${(props) => props.theme.color['yellow-dark']};
    border-radius: 6px;
  }
`
