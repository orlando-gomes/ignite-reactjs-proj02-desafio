import { CoffeeItem } from './CoffeeItem'
import { Intro } from './Intro'
import { CoffeeList, Filter, HomeContainer } from './styles'
import {
  CoffeeInterface,
  coffeeListData,
  availableTags,
} from '../../data/CoffeeData'
import { useEffect, useState } from 'react'

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeInterface[]>([])

  useEffect(() => {
    setCoffees(coffeeListData)
  }, [])

  return (
    <HomeContainer>
      <Intro />

      <section>
        <header>
          <span>Nossos cafés</span>
          <Filter>
            {availableTags.map((availableTag) => (
              <button key={availableTags.indexOf(availableTag)}>
                {availableTag}
              </button>
            ))}
          </Filter>
        </header>
        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeItem
              key={coffee.id}
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
