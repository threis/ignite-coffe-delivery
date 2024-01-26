import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import * as z from 'zod'
import {
  AddressBox,
  AddressForm,
  ButtonGroup,
  CartContainer,
  CartDetail,
  CartInfo,
  CartItem,
  CartItemContent,
  CheckoutFormContainer,
  CustomerInfoContainer,
  Input,
  OptionalInputBox,
  PaymentBox,
  PaymentOption,
  RemoveButton,
  SelectPaymentBox,
  Separator,
} from './styles'
import { CounterButton } from '../../components/CounterButton'
import { formatBRLCurrency } from '../../utils/formatCurrency'
import { CartContext } from '../../contexts/CartContext'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const folderPath = ' /src/assets/coffees/'

interface ProductData {
  name: string
  price: number
  image: string
  quantity: number
}

const cartFormValidationSchema = z.object({
  zipCode: z.string(),
  address: z.string(),
  addressNumber: z.string(),
  complement: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
  paymentType: z.enum(['cash', 'credit', 'debit']),
})

type CartFormData = z.infer<typeof cartFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()

  const {
    cartList,
    removeCartItem,
    getTotalPriceInCart,
    addNewOrUpdateCartItem,
    addCustomerAddress,
    addPaymentForm,
  } = useContext(CartContext)

  const [checked, setChecked] = useState('')

  const { handleSubmit, register } = useForm<CartFormData>({
    resolver: zodResolver(cartFormValidationSchema),
  })

  const totalPrice = getTotalPriceInCart()
  const deliveryFee = totalPrice ? 3.3 : 0

  const formattedDeliveryFee = formatBRLCurrency(deliveryFee)
  const formattedTotalPriceWithoutDeliveryFee = formatBRLCurrency(totalPrice)
  const formattedTotalPrice = formatBRLCurrency(totalPrice + deliveryFee)

  function handleRemoveProduct(product: ProductData) {
    removeCartItem(product)
  }

  function handleAddAmount(productName: string) {
    const product = cartList.find((cart) => cart.name === productName)

    if (product && product.quantity < 99) {
      addNewOrUpdateCartItem({ ...product, quantity: product.quantity + 1 })
    }
  }

  function handleSubtractAmount(productName: string) {
    const product = cartList.find((cart) => cart.name === productName)

    if (product && product.quantity > 1) {
      addNewOrUpdateCartItem({ ...product, quantity: product.quantity - 1 })
    }
  }

  function handleCartSubmit(data: CartFormData) {
    if (!cartList.length) {
      console.log('Nenhum produto selecionado')
    }

    addCustomerAddress({
      address: data.address,
      adressNumber: data.addressNumber,
      city: data.city,
      complement: data.complement,
      neighborhood: data.neighborhood,
      state: data.state,
      zipCode: data.zipCode,
    })
    addPaymentForm({ paymentType: data.paymentType })
    navigate('/success')
  }

  return (
    <>
      <CheckoutFormContainer onSubmit={handleSubmit(handleCartSubmit)}>
        <CustomerInfoContainer>
          <h2>Complete seu pedido</h2>
          <AddressBox>
            <header>
              <MapPinLine />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <AddressForm>
              <Input
                type="text"
                placeholder="CEP"
                width="12.5rem"
                {...register('zipCode')}
              />
              <Input
                type="text"
                placeholder="Rua"
                width="100%"
                {...register('address')}
              />
              <div>
                <Input
                  type="text"
                  placeholder="Número"
                  width="12.5rem"
                  {...register('addressNumber')}
                />
                <OptionalInputBox width="calc(100% - 12.5rem)">
                  <Input
                    type="text"
                    placeholder="Complemento"
                    width="100%"
                    {...register('complement')}
                  />
                  <label htmlFor="complement">Opcional</label>
                </OptionalInputBox>
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Bairro"
                  width="12.5rem"
                  {...register('neighborhood')}
                />
                <Input
                  type="text"
                  placeholder="Cidade"
                  width="calc(100% - 12.5rem - 3.75rem)"
                  {...register('city')}
                />
                <Input
                  type="text"
                  placeholder="UF"
                  width="3.75rem"
                  {...register('state')}
                />
              </div>
            </AddressForm>
          </AddressBox>
          <PaymentBox>
            <header>
              <CurrencyDollar />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>
            <SelectPaymentBox>
              <PaymentOption
                htmlFor="credit"
                onClick={() => setChecked('credit')}
                isChecked={checked === 'credit'}
              >
                <input
                  type="radio"
                  id="credit"
                  value="credit"
                  {...register('paymentType')}
                />
                <Bank />
                <span>CARTÃO DE DÉBITO</span>
              </PaymentOption>
              <PaymentOption
                htmlFor="debit"
                onClick={() => setChecked('debit')}
                isChecked={checked === 'debit'}
              >
                <input
                  type="radio"
                  id="debit"
                  value="debit"
                  {...register('paymentType')}
                />
                <CreditCard />
                <span>CARTÃO DE CRÉDITO</span>
              </PaymentOption>
              <PaymentOption htmlFor="cash" isChecked={checked === 'cash'}>
                <input
                  type="radio"
                  id="cash"
                  onClick={() => setChecked('cash')}
                  value="cash"
                  {...register('paymentType')}
                />
                <Money />
                <span>DINHEIRO</span>
              </PaymentOption>
            </SelectPaymentBox>
          </PaymentBox>
        </CustomerInfoContainer>
        <CartContainer>
          <h2>Cafés selecionados</h2>
          <CartInfo>
            {cartList &&
              cartList.map((product) => {
                const priceFormattedBRL = formatBRLCurrency(product.price)
                return (
                  <div key={product.name}>
                    <CartItem>
                      <img src={`${folderPath}${product.image}`} alt="" />
                      <CartItemContent>
                        <div>
                          <p>{product.name}</p>
                        </div>
                        <ButtonGroup>
                          <CounterButton
                            height="2rem"
                            amount={product.quantity}
                            addCounterAmount={() =>
                              handleAddAmount(product.name)
                            }
                            subtractCounterAmount={() =>
                              handleSubtractAmount(product.name)
                            }
                          />
                          <RemoveButton
                            onClick={() => handleRemoveProduct(product)}
                          >
                            <Trash />
                            REMOVER
                          </RemoveButton>
                        </ButtonGroup>
                      </CartItemContent>
                      <span>R$ {priceFormattedBRL}</span>
                    </CartItem>
                    <Separator />
                  </div>
                )
              })}
            <CartDetail>
              <div>
                <p>Total de Itens</p>
                <span>R$ {formattedTotalPriceWithoutDeliveryFee}</span>
              </div>
              <div>
                <p>Entrega</p>
                <span>R$ {formattedDeliveryFee}</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>R$ {formattedTotalPrice}</strong>
              </div>
              <button type="submit">CONFIRMAR PEDIDO</button>
            </CartDetail>
          </CartInfo>
        </CartContainer>
      </CheckoutFormContainer>
    </>
  )
}
