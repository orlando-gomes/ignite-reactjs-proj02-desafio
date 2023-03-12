import styled from 'styled-components'

interface IntroContainerProps {
  iconBgColor: string
}

export const IntroItemContainer = styled.div<IntroContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;

  span:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${(props) => props.iconBgColor};
    color: ${(props) => props.theme.color.white};
  }

  span + span {
    line-height: 130%;
    font-size: 1rem;
  }
`
