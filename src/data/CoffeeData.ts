import { CoffeeItemInterface } from '../pages/Home/CoffeeItem'

import traditionalCoffee from '../assets/coffees/traditional-coffee.svg'
import americanExpress from '../assets/coffees/american-express.svg'
import creamyExpress from '../assets/coffees/creamy-express.svg'
import icedExpress from '../assets/coffees/iced-express.svg'
import milkWithCoffee from '../assets/coffees/milk-with-coffee.svg'
import latte from '../assets/coffees/latte.svg'
import capuccino from '../assets/coffees/capuccino.svg'
import macchiato from '../assets/coffees/macchiato.svg'
import mocaccino from '../assets/coffees/mocaccino.svg'
import hotChocolate from '../assets/coffees/hot-chocolate.svg'
import cuban from '../assets/coffees/cuban.svg'
import hawaiian from '../assets/coffees/hawaiian.svg'
import arabian from '../assets/coffees/arabian.svg'
import irish from '../assets/coffees/irish.svg'

export interface CoffeeInterface extends CoffeeItemInterface {
  id: number
}

export const coffeeListData: CoffeeInterface[] = [
  {
    id: 1,
    image: traditionalCoffee,
    tagList: ['tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    image: americanExpress,
    tagList: ['tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    image: creamyExpress,
    tagList: ['tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: 4,
    image: icedExpress,
    tagList: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 5,
    image: milkWithCoffee,
    tagList: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 6,
    image: latte,
    tagList: ['tradicional', 'com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    image: capuccino,
    tagList: ['tradicional', 'com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela, feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    image: macchiato,
    tagList: ['tradicional', 'com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 9,
    image: mocaccino,
    tagList: ['tradicional', 'com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 10,
    image: hotChocolate,
    tagList: ['tradicional', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite e café',
    price: 9.9,
  },
  {
    id: 11,
    image: cuban,
    tagList: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: 12,
    image: hawaiian,
    tagList: ['especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 13,
    image: arabian,
    tagList: ['especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: 14,
    image: irish,
    tagList: ['especial', 'alcoólico'],
    title: 'Irlandês',
    description:
      'Bebida a base de de café, uisque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
