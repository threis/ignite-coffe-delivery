import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
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
  RemoveButton,
  SelectionPaymentBox,
  Separator,
} from './styles'
import { CounterButton } from '../../components/CounterButton'
import { formatBRLCurrency } from '../../utils/formatCurrency'

const folderPath = ' /src/assets/coffees/'

const productsCartList = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['TRADICIONAL'],
    image: 'espresso-coffee.svg',
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['TRADICIONAL'],
    image: 'american-coffee.svg',
  },
]

export function Checkout() {
  return (
    <>
      <CheckoutFormContainer>
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
                name="zip_code"
                placeholder="CEP"
                width="12.5rem"
              />
              <Input type="text" name="name" placeholder="Rua" width="100%" />
              <div>
                <Input
                  type="text"
                  name="number"
                  placeholder="Número"
                  width="12.5rem"
                />
                <OptionalInputBox width="calc(100% - 12.5rem)">
                  <Input
                    type="text"
                    name="complement"
                    placeholder="Complemento"
                    width="100%"
                  />
                  <label htmlFor="complement">Opcional</label>
                </OptionalInputBox>
              </div>
              <div>
                <Input
                  type="text"
                  name="neiborhood"
                  placeholder="Bairro"
                  width="12.5rem"
                />
                <Input
                  type="text"
                  name="city"
                  placeholder="Cidade"
                  width="calc(100% - 12.5rem - 3.75rem)"
                />
                <Input
                  type="text"
                  name="state"
                  placeholder="UF"
                  width="3.75rem"
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
            <SelectionPaymentBox>
              <button type="button">
                <Bank />
                <span>CARTÃO DE DÉBITO</span>
              </button>
              <button type="button">
                <CreditCard />
                <span>CARTÃO DE CRÉDITO</span>
              </button>
              <button type="button">
                <Money />
                <span>DINHEIRO</span>
              </button>
            </SelectionPaymentBox>
          </PaymentBox>
        </CustomerInfoContainer>
        <CartContainer>
          <h2>Cafés selecionados</h2>
          <CartInfo>
            {productsCartList &&
              productsCartList.map((product) => {
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
                          <CounterButton height="2rem" />
                          <RemoveButton>
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
                <span>R$ 29,70</span>
              </div>
              <div>
                <p>Entrega</p>
                <span>R$ 3,50</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>R$ 3,50</strong>
              </div>
              <button type="submit">CONFIRMAR PEDIDO</button>
            </CartDetail>
          </CartInfo>
        </CartContainer>
      </CheckoutFormContainer>
    </>
  )
}
