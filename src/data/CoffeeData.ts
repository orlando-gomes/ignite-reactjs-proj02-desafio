import { CoffeeItemInterface } from '../pages/Home/CoffeeItem'

import traditionalCoffee from '../assets/coffees/traditional-coffee.svg'

export interface CoffeeInterface extends CoffeeItemInterface {
  id: number
}

export const coffeeListData: CoffeeInterface[] = [
  {
    id: 1,
    image: traditionalCoffee,
    tagList: ['tradicional', 'alcoólico', 'gelado'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 1,
    image: traditionalCoffee,
    tagList: ['tradicional', 'alcoólico', 'gelado'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 1,
    image: traditionalCoffee,
    tagList: ['tradicional', 'alcoólico', 'gelado'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 1,
    image: traditionalCoffee,
    tagList: ['tradicional', 'alcoólico', 'gelado'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 1,
    image: traditionalCoffee,
    tagList: ['tradicional', 'alcoólico', 'gelado'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 1,
    image: traditionalCoffee,
    tagList: ['tradicional', 'alcoólico', 'gelado'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
]
