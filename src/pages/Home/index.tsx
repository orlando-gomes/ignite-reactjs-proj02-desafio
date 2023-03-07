import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import { HeaderContainer, LocationAndCartContainer } from './styles'

export function Home() {
  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="logo" />
        <LocationAndCartContainer>
          <div>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </div>
          <div>
            <ShoppingCart size={22} weight="fill" />
          </div>
        </LocationAndCartContainer>
      </HeaderContainer>
      <main>
        <section>
          <article>
            <div>Encontre o café perfeito para qualquer hora do dia</div>
            <div>
              Com o Coffee Delivery você recebe o seu café onde estiver, a
              qualquer hora
            </div>
          </article>
          <article>
            <div>Compra simples e segura</div>
            <div>Embalagem mantém o café intacto</div>
            <div>Entrega rápida e rastreada</div>
            <div>O café chega fresquinho até você</div>
          </article>
          <img src="teste" alt="teste" />
        </section>

        <section>
          <header>Nossos cafés</header>
          <div>
            <img src="" alt="café" />
            <div>Tradicional</div>
            <div>Expresso Tradicional</div>
            <div>O tradicional café feito com água quente e grãos moídos</div>
            <div>
              <span>R$ 9,90</span>
              <span>-1+</span>
              <ShoppingCart size={22} weight="fill" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
