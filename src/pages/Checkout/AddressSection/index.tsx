import { ChangeEvent } from 'react'
import { useFormContext } from 'react-hook-form'

import { MapPinLine } from '@phosphor-icons/react'

import {
  AddressSectionContainer,
  AddressTopText,
  CEPInput,
  CityInput,
  ComplementInput,
  DistrictInput,
  NumberInput,
  StateInput,
  StreetInput,
} from './styles'

import { CheckoutFormData } from '../index'

interface AddressSectionProps {
  formData: CheckoutFormData
  functionToSetFormData: (data: CheckoutFormData) => void
}

export function AddressSection({
  formData,
  functionToSetFormData,
}: AddressSectionProps) {
  const { register } = useFormContext()

  function handleChangingField(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.id === 'zipCode' && e.target.value.length === 5) {
      functionToSetFormData({
        ...formData,
        [e.target.id]: e.target.value.concat('-'),
      })
    } else {
      functionToSetFormData({
        ...formData,
        [e.target.id]: e.target.value,
      })
    }
  }

  return (
    <AddressSectionContainer>
      <div>
        <MapPinLine size={22} />

        <AddressTopText>
          <div>Endereço de entrega</div>
          <div>Informe o endereço onde deseja receber o seu pedido</div>
        </AddressTopText>
      </div>

      <div>
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
      </div>
    </AddressSectionContainer>
  )
}
