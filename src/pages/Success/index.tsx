import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Local, OrderInfo, Payment, SuccessContainer, Time } from './styles'
import successIllustration from '../../assets/success-Illustration.svg'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'

const payTypes = {
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
  money: 'Dinheiro',
}

export function Success() {
  const { clientData, payMethod, clearCart } = useContext(CartContext)
  const { street, number, district, state, complement, city } = clientData

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido Confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div>
        <OrderInfo>
          <Local>
            <image>
              <MapPin size={14} weight="fill" />
            </image>

            <div>
              <p>
                Entrega em{' '}
                <span>
                  {street}, {number}
                  {complement && ', ' + complement}
                </span>
              </p>
              <p>
                {district} - {city}, {state}
              </p>
            </div>
          </Local>

          <Time>
            <image>
              <Timer size={16} weight="fill" />
            </image>

            <div>
              <p>Previsão de entrega</p>
              <p>
                <span>20 min - 30 min</span>
              </p>
            </div>
          </Time>

          <Payment>
            <image>
              <CurrencyDollar size={16} />
            </image>

            <div>
              <p>Pagamento na entrega</p>
              <p>
                <span>{payTypes[payMethod]}</span>
              </p>
            </div>
          </Payment>
        </OrderInfo>
        <img src={successIllustration} alt="sucesso" />
      </div>
    </SuccessContainer>
  )
}
