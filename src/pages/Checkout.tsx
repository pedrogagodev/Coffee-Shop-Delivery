import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import * as zod from 'zod';
import ItemCheckout from '../components/ItemCheckout';
import { useFormStore } from '../store/checkoutPage';
import { useCoffeeStore } from '../store/coffees';
import { PaymentMethods } from '../store/checkoutPage';

export function Checkout() {
  const { setFormData, setPaymentMethod, paymentMethod } = useFormStore();
  const { coffees } = useCoffeeStore();
  const navigate = useNavigate();
  const newFormValidationSchema = zod.object({
    CEP: zod
      .string()
      .min(1, 'Insira um número de CEP válido')
      .max(9, 'Insira um número de CEP válido'),
    Rua: zod.string().min(1, 'Insira um nome de rua válido'),
    Numero: zod.number().positive('Insira um número válido'),
    Complemento: zod.string().optional(),
    Bairro: zod.string().min(1, 'Insira um nome de bairro válido'),
    Cidade: zod.string().min(1, 'Insira um nome de cidade válido'),
    UF: zod
      .string()
      .min(1, 'Insira um UF válido')
      .max(2, 'Insira um UF válido'),
  });

  type NewFormData = zod.infer<typeof newFormValidationSchema>;

  const { register, handleSubmit } = useForm<NewFormData>({
    resolver: zodResolver(newFormValidationSchema),
    defaultValues: {
      CEP: '',
      Rua: '',
      Complemento: '',
      Bairro: '',
      Cidade: '',
      UF: '',
    },
  });

  const onSubmit = (data: NewFormData) => {
    setFormData(data);
    navigate('/success');
  };

  const handleClick = () => {
    handleSubmit(onSubmit)();
  };

  const coffeesInCart = coffees.filter((coffee) => coffee.quantity > 0);

  const totalItemsPrice = coffees.reduce((total, coffee) => {
    return total + coffee.price * coffee.quantity;
  }, 0);

  const deliveryFee = 3.5;

  const totalOrderPrice = totalItemsPrice + deliveryFee;

  const handleSelectPaymentMethod = (method: PaymentMethods) => {
    setPaymentMethod(method);
  };

  if (coffeesInCart.length === 0) {
    navigate('/');
  }

  return (
    <div className="mx-10 flex flex-col justify-around gap-8 md:mx-40 md:flex-row">
      <div>
        <h2 className="mb-4 font-baloo text-lg font-bold text-base-subtitle">
          Complete seu pedido
        </h2>
        <div className="mb-3 rounded-md bg-base-card p-10">
          <div className="flex gap-2">
            <MapPinLine size={22} className="text-yellow-dark" />
            <h3 className="text-base-subtitle">Endereço de Entrega</h3>
          </div>
          <p className="ml-8 text-base-text">
            Informe o endereço onde deseja receber seu pedido
          </p>
          <form action="" method="get" className="mt-8 flex flex-col gap-4">
            <input
              type="text"
              className="h-10 w-52 rounded-md border border-base-button bg-base-input pl-3 focus:border-yellow-dark focus:outline-none"
              placeholder="CEP"
              {...register('CEP')}
            />
            <input
              type="text"
              className="h-10 rounded-md border border-base-button bg-base-input pl-3 focus:border-yellow-dark focus:outline-none"
              placeholder="Rua"
              {...register('Rua')}
            />
            <div className="flex gap-3">
              <input
                type="text"
                className="h-10 w-24 rounded-md border border-base-button bg-base-input pl-3 focus:border-yellow-dark focus:outline-none"
                placeholder="Número"
                {...register('Numero', { valueAsNumber: true })}
              />
              <input
                type="text"
                className="h-10 w-44 rounded-md border border-base-button bg-base-input pl-3 focus:border-yellow-dark focus:outline-none md:w-full"
                placeholder="Complemento"
                {...register('Complemento')}
              />
            </div>
            <input
              type="text"
              className="h-10 w-52 rounded-md border border-base-button bg-base-input pl-3 focus:border-yellow-dark focus:outline-none"
              placeholder="Bairro"
              {...register('Bairro')}
            />
            <div className="flex gap-3">
              <input
                type="text"
                className="h-10 w-72 rounded-md border border-base-button bg-base-input pl-3 focus:border-yellow-dark focus:outline-none"
                placeholder="Cidade"
                {...register('Cidade')}
              />
              <input
                type="text"
                className="h-10 w-14 rounded-md border border-base-button bg-base-input pl-3 focus:border-yellow-dark focus:outline-none"
                placeholder="UF"
                {...register('UF')}
              />
            </div>
          </form>
        </div>
        <div className="rounded-md bg-base-card p-10">
          <div className="flex gap-2">
            <CurrencyDollar size={22} className="text-my-purple" />
            <h3 className="text-base-subtitle">Pagamento</h3>
          </div>
          <p className="ml-8 text-base-text">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>

          <div className="mt-8 flex flex-col gap-3 md:flex-row">
            <button
              className={`flex gap-3 rounded-md bg-base-button p-4 hover:bg-base-hover ${paymentMethod === 'Cartão de crédito' ? 'border border-my-purple' : 'bg-base-button'}`}
              id="creditCard"
              onClick={() => handleSelectPaymentMethod('Cartão de crédito')}
            >
              <CreditCard
                size={16}
                weight="bold"
                className={`mt-1 text-my-purple`}
              />
              <span className="text-base-text">CARTÃO DE CRÉDITO</span>
            </button>
            <button
              className={`flex gap-3 rounded-md bg-base-button p-4 hover:bg-base-hover ${paymentMethod === 'Cartão de débito' ? 'border border-my-purple' : 'bg-base-button'}`}
              id="debitCard"
              onClick={() => handleSelectPaymentMethod('Cartão de débito')}
            >
              <Bank size={16} weight="bold" className="mt-1 text-my-purple" />
              <span className="text-base-text">CARTÃO DE DÉBITO</span>
            </button>

            <button
              className={`flex gap-3 rounded-md bg-base-button p-4 hover:bg-base-hover ${paymentMethod === 'Dinheiro' ? 'border border-my-purple' : 'bg-base-button'}`}
              id="cash"
              onClick={() => handleSelectPaymentMethod('Dinheiro')}
            >
              <Money size={16} weight="bold" className="mt-1 text-my-purple" />
              <span className="text-base-text">DINHEIRO</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-4 font-baloo text-lg font-bold">
          Cafés selecionados
        </h2>
        <div className="md:w-112 w-90 rounded-bl-3xl rounded-br-md rounded-tl-md rounded-tr-3xl bg-base-card px-3 pb-10 pt-4 md:px-10">
          {coffeesInCart.map((coffee) => (
            <ItemCheckout key={coffee.id} coffee={coffee} />
          ))}
          <div className="flex flex-col gap-3">
            <div className="mt-6 flex justify-between text-base-text">
              <span>Total de itens</span>
              <p>R$ {totalItemsPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-base-text">
              <span>Entrega</span>
              <p>R$ 3,50</p>
            </div>
            <div className="flex justify-between text-xl font-bold text-base-subtitle">
              <span>Total</span>
              <p>R$ {totalOrderPrice.toFixed(2)}</p>
            </div>
          </div>
          <button
            className="mt-6 w-full rounded-md bg-my-yellow px-2 py-3 text-white hover:bg-yellow-dark"
            onClick={handleClick}
          >
            CONFIRMAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  );
}
