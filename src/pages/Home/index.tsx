import { CoffeeItem } from './CoffeeItem'
import { Intro } from './Intro'
import { CoffeeList, Filter, HomeContainer } from './styles'
import traditionalCoffee from '../../assets/coffees/traditional-coffee.svg'
import { coffeeListData } from '../../data/CoffeeData'

export function Home() {
  const coffee = {
    id: 1,
    image: traditionalCoffee,
    tagList: ['tradicional', 'alcoólico', 'gelado'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  }

  const coffees = coffeeListData

  return (
    <HomeContainer>
      <Intro />

      <section>
        <header>
          <span>Nossos cafés</span>
          <Filter>
            <button>tradicional</button>
            <button>especial</button>
            <button>com leite</button>
            <button>alcoólico</button>
            <button>gelado</button>
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
