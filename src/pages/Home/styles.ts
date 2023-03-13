import styled from 'styled-components'

interface FilterButtonProps {
  isActive: boolean
}

export const HomeContainer = styled.main`
  section {
    & > header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 104px;

      span {
        font-family: 'Baloo 2';
        font-size: 2rem;
        color: ${(props) => props.theme.color['base-subtitle']};
      }
    }
  }
`
export const Filter = styled.nav`
  display: flex;
  gap: 0.5rem;
`

export const FilterButton = styled.button<FilterButtonProps>`
  background-color: ${(props) =>
    props.isActive ? props.theme.color.yellow : `transparent`};
  color: ${(props) =>
    props.isActive
      ? props.theme.color.white
      : props.theme.color['yellow-dark']};
  border: 1px solid ${(props) => props.theme.color.yellow};
  padding: 0.375rem 0.75rem;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 0.625rem;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.isActive
        ? props.theme.color['yellow-dark']
        : props.theme.color.yellow};
    color: ${(props) => props.theme.color.white};
  }
`

export const CoffeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;
`
