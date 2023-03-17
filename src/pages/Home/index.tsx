import { CoffeeItem } from './CoffeeItem'
import { Intro } from './Intro'
import { CoffeeList, Filter, FilterButton, HomeContainer } from './styles'
import {
  CoffeeItemInterface,
  coffeeListData,
  availableTags,
} from '../../data/CoffeeData'
import { useEffect, useState } from 'react'

export function Home() {
  const [showedCoffees, setShowedCoffees] = useState<CoffeeItemInterface[]>([])

  const [filtersInPlace, setFiltersInPlace] = useState<string[]>([])

  function applyToCoffeeList(filters: string[]): CoffeeItemInterface[] {
    let remainingShowedCoffees = coffeeListData
    if (filters.length > 0) {
      filters.forEach((filter) => {
        remainingShowedCoffees = remainingShowedCoffees.filter((coffee) => {
          if (coffee.tagList.indexOf(filter) > -1) {
            return true
          }
          return false
        })
      })
    }
    return remainingShowedCoffees
  }

  useEffect(() => {
    const remainingShowedCoffees = applyToCoffeeList(filtersInPlace)
    setShowedCoffees(remainingShowedCoffees)
  }, [filtersInPlace])

  function toggleFilterEffect(filterTag: string) {
    const indexTag = filtersInPlace.indexOf(filterTag)
    const filterTagNotActive = indexTag === -1

    if (filterTagNotActive) {
      const aux = [...filtersInPlace, filterTag]
      setFiltersInPlace(aux)
    } else {
      const remainingFilters = [...filtersInPlace]
      remainingFilters.splice(indexTag, 1)
      setFiltersInPlace(remainingFilters)
    }
  }

  // const memorizedFilters = useMemo(
  //   () => (
  //     <Filter>
  //       {availableTags.map((availableTag) => (
  //         <FilterButton
  //           key={availableTags.indexOf(availableTag)}
  //           onClick={() => {
  //             toggleFilterEffect(availableTag)
  //           }}
  //           isActive={filtersInPlace.indexOf(availableTag) !== -1}
  //         >
  //           {availableTag}
  //         </FilterButton>
  //       ))}
  //     </Filter>
  //   ),
  //   [filtersInPlace, toggleFilterEffect],
  // )

  return (
    <HomeContainer>
      <Intro />

      <section>
        <header>
          <span>Nossos cafés</span>
          <Filter>
            {availableTags.map((availableTag) => (
              <FilterButton
                key={availableTags.indexOf(availableTag)}
                onClick={() => {
                  toggleFilterEffect(availableTag)
                }}
                isActive={filtersInPlace.indexOf(availableTag) !== -1}
              >
                {availableTag}
              </FilterButton>
            ))}
          </Filter>
        </header>
        <CoffeeList>
          {showedCoffees.map((coffee) => (
            <CoffeeItem
              key={coffee.id}
              id={coffee.id}
              image={coffee.image}
              tagList={coffee.tagList}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
            />
          ))}
        </CoffeeList>
      </section>
    </HomeContainer>
  )
}
