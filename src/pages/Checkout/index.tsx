import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  AddressSection,
  AddressTopText,
  CEPInput,
  CheckoutContainer,
  CityInput,
  ComplementInput,
  DistrictInput,
  NumberInput,
  PayButton,
  PaySection,
  PayTitle,
  StateInput,
  StreetInput,
} from './styles'

import { ConfirmSection } from './ConfirmSection'
import { FormEvent } from 'react'

export function Checkout() {
  function handleCreateNewOrder(event: FormEvent) {
    event.preventDefault()
    console.log('Submeteu o formulário')
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleCreateNewOrder}>
        <main>
          <header>Complete seu pedido</header>
          <AddressSection>
            <div>
              <MapPinLine size={22} />

              <AddressTopText>
                <div>Endereço de entrega</div>
                <div>Informe o endereço onde deseja receber o seu pedido</div>
              </AddressTopText>
            </div>

            <div>
              <CEPInput placeholder="CEP" autoComplete="new-password" />
              <StreetInput placeholder="Rua" autoComplete="new-password" />
              <div>
                <NumberInput placeholder="Número" autoComplete="new-password" />
                <ComplementInput
                  value={''}
                  placeholder="Complemento Opcional"
                  autoComplete="new-password"
                />
              </div>
              <div>
                <DistrictInput
                  value={''}
                  placeholder="Bairro"
                  autoComplete="new-password"
                />
                <CityInput
                  value={''}
                  placeholder="Cidade"
                  autoComplete="new-password"
                />
                <StateInput
                  value={''}
                  placeholder="UF"
                  autoComplete="new-password"
                />
              </div>
            </div>
          </AddressSection>

          <PaySection>
            <div>
              <CurrencyDollar size={22} />
              <PayTitle>
                <div>Pagamento</div>
                <div>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar.
                </div>
              </PayTitle>
            </div>

            <div>
              <PayButton type="button" onClick={() => {}} selected={true}>
                <CreditCard size={16} />
                CARTÃO DE CRÉDITO
              </PayButton>
              <PayButton type="button" onClick={() => {}} selected={false}>
                <Bank size={16} />
                CARTÃO DE DÉBITO
              </PayButton>
              <PayButton type="button" onClick={() => {}} selected={false}>
                <Money size={16} />
                DINHEIRO
              </PayButton>
            </div>
          </PaySection>
        </main>

        <aside>
          <header>Cafés selecionados</header>
          <ConfirmSection />
        </aside>
      </form>
    </CheckoutContainer>
  )
}
