import { IntroContainer, IntroHeader } from './styles'
import introImage from '../../../assets/intro-image.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { IntroItem } from '../IntroItem'
import { defaultTheme } from '../../../styles/themes/default'

export function Intro() {
  return (
    <IntroContainer>
      <section>
        <IntroHeader>
          <div>Encontre o café perfeito para qualquer hora do dia</div>
          <div>
            Com o Coffee Delivery você recebe o seu café onde estiver, a
            qualquer hora
          </div>
        </IntroHeader>
        <article>
          <div>
            <IntroItem
              text="Compra simples e segura"
              icon={<ShoppingCart size={16} weight="fill" />}
              iconBgColor={defaultTheme.color['yellow-dark']}
            />
            <IntroItem
              text="Entrega rápida e rastreada"
              icon={<Timer size={16} weight="fill" />}
              iconBgColor={defaultTheme.color.yellow}
            />
          </div>

          <div>
            <IntroItem
              text="Embalagem mantém o café intacto"
              icon={<Package size={16} weight="fill" />}
              iconBgColor={defaultTheme.color['base-text']}
            />
            <IntroItem
              text="O café chega fresquinho até você"
              icon={<Coffee size={16} weight="fill" />}
              iconBgColor={defaultTheme.color.purple}
            />
          </div>
        </article>
      </section>
      <img src={introImage} alt="teste" />
    </IntroContainer>
  )
}
