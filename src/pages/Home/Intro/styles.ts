import styled from 'styled-components'
import introBackground from '../../../assets/intro-background.svg'

export const IntroContainer = styled.section`
  padding: 5.875rem 0 6.75rem 0;
  height: 34rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  background-image: url(${introBackground});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  section {
    width: 52.5%;

    article {
      display: flex;
      gap: 2.5rem;
    }
  }

  img {
    width: 42%;
  }
`
export const IntroHeader = styled.h1`
  /* height: 12rem; */
  margin-bottom: 4.125rem;
  display: flex;
  flex-direction: column;

  div:first-child {
    width: 100%;
    color: ${(props) => props.theme.color['base-title']};
    font-size: 3rem;
    line-height: 130%;
    font-weight: bolder;
    margin-bottom: 1rem;
    font-family: 'Baloo 2';
  }

  div + div {
    color: ${(props) => props.theme.color['base-subtitle']};
    font-size: 1.25rem;
    font-weight: regular;
  }
`
