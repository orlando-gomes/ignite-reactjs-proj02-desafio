import { ChangeEvent, useContext, useState } from 'react'

import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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
import { CartContext } from '../../contexts/CartContext'
import { payType } from '../../reducers/cart/reducer'

const newCheckoutValidationSchema = zod.object({
  zipCode: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(5, 'Informe a rua'),
  number: zod.string().nonempty('Informe um número válido'),
  complement: zod.string().optional(),
  district: zod.string().nonempty('Informe um bairro'),
  city: zod.string().nonempty('Informe uma cidade'),
  state: zod.string().nonempty('Informe um estado'),
})

export type CheckoutFormData = zod.infer<typeof newCheckoutValidationSchema>

export function Checkout() {
  const { clientData, payMethod, updatePaymentMethod, updateClientData } =
    useContext(CartContext)

  const [formData, setFormData] = useState<CheckoutFormData>(clientData)

  const newCheckoutFormMethods = useForm<CheckoutFormData>({
    resolver: zodResolver(newCheckoutValidationSchema),
  })

  const { handleSubmit, register, formState } = newCheckoutFormMethods

  // const { register } = useFormContext()

  // function handleCreateNewOrder(event: FormEvent) {
  //   event.preventDefault()
  //   console.log('Submeteu o formulário')
  // }

  if (formState.errors) {
    console.log(formState.errors)
  }

  function handleCreateNewOrder(data: CheckoutFormData) {
    updateClientData(data)
  }

  function handleUpdatePaymentMethod(method: payType) {
    updatePaymentMethod(method)
  }

  function handleChangingField(e: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
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
              <FormProvider {...newCheckoutFormMethods}>
                <CEPInput
                  id="zipCode"
                  placeholder="CEP"
                  value={formData.zipCode}
                  {...register('zipCode', {
                    onChange: handleChangingField,
                  })}
                />
                <StreetInput
                  id="street"
                  placeholder="Rua"
                  value={formData.street}
                  {...register('street', {
                    onChange: handleChangingField,
                  })}
                />
                <div>
                  <NumberInput
                    id="number"
                    placeholder="Número"
                    value={formData.number}
                    {...register('number', {
                      onChange: handleChangingField,
                    })}
                  />
                  <ComplementInput
                    id="complement"
                    placeholder="Complemento Opcional"
                    value={formData.complement}
                    {...register('complement', {
                      onChange: handleChangingField,
                    })}
                  />
                </div>
                <div>
                  <DistrictInput
                    id="district"
                    placeholder="Bairro"
                    value={formData.district}
                    {...register('district', {
                      onChange: handleChangingField,
                    })}
                  />
                  <CityInput
                    id="city"
                    placeholder="Cidade"
                    value={formData.city}
                    {...register('city', {
                      onChange: handleChangingField,
                    })}
                  />
                  <StateInput
                    id="state"
                    placeholder="UF"
                    value={formData.state}
                    {...register('state', {
                      onChange: handleChangingField,
                    })}
                  />
                </div>
              </FormProvider>
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
              <PayButton
                type="button"
                onClick={() => {
                  handleUpdatePaymentMethod('credit')
                }}
                selected={payMethod === 'credit'}
              >
                <CreditCard size={16} />
                CARTÃO DE CRÉDITO
              </PayButton>
              <PayButton
                type="button"
                onClick={() => {
                  handleUpdatePaymentMethod('debit')
                }}
                selected={payMethod === 'debit'}
              >
                <Bank size={16} />
                CARTÃO DE DÉBITO
              </PayButton>
              <PayButton
                type="button"
                onClick={() => {
                  handleUpdatePaymentMethod('money')
                }}
                selected={payMethod === 'money'}
              >
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
