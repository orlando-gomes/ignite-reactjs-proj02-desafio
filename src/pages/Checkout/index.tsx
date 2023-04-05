import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'

import { CheckoutContainer, PayButton, PaySection, PayTitle } from './styles'

import { ConfirmSection } from './ConfirmSection'
import { CartContext } from '../../contexts/CartContext'
import { payType } from '../../reducers/cart/reducer'
import { AddressSection } from './AddressSection'

const zipRegex = '[1-9]{1}[0-9]{4}-[0-9]{3}'

const newCheckoutValidationSchema = zod.object({
  zipCode: zod
    .string()
    .min(1, 'Informe o CEP')
    .regex(new RegExp(zipRegex), 'CEP invalido'),
  street: zod.string().min(5, 'Informe a rua'),
  number: zod.string().nonempty('Informe um número válido'),
  complement: zod.string().optional(),
  district: zod.string().nonempty('Informe um bairro'),
  city: zod.string().nonempty('Informe uma cidade'),
  state: zod.string().nonempty('Informe um estado'),
})

export type CheckoutFormData = zod.infer<typeof newCheckoutValidationSchema>

export function Checkout(props: any) {
  const { clientData, payMethod, updatePaymentMethod, updateClientData } =
    useContext(CartContext)

  const [formData, setFormData] = useState<CheckoutFormData>(clientData)

  const newCheckoutFormMethods = useForm<CheckoutFormData>({
    resolver: zodResolver(newCheckoutValidationSchema),
  })

  const { handleSubmit, formState } = newCheckoutFormMethods

  const navigate = useNavigate()

  // function handleCreateNewOrder(event: FormEvent) {
  //   event.preventDefault()
  //   console.log('Submeteu o formulário')
  // }

  if (formState.errors) {
    console.log(formState.errors)
  }

  function handleCreateNewOrder(data: CheckoutFormData) {
    updateClientData(data)
    navigate('/success')
  }

  function handleUpdatePaymentMethod(method: payType) {
    updatePaymentMethod(method)
  }

  function functionToSetFormData(data: CheckoutFormData) {
    setFormData(data)
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
        <main>
          <header>Complete seu pedido</header>
          <FormProvider {...newCheckoutFormMethods}>
            <AddressSection
              formData={formData}
              functionToSetFormData={functionToSetFormData}
            />
          </FormProvider>
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
