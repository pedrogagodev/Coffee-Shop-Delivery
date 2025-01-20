import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import ItemCheckout from '../components/ItemCheckout';
import { useContext } from 'react';
import { CoffeeContext } from '../contexts/CoffeeContext';
import { useNavigate } from 'react-router';

export function Checkout() {
  const { coffees, setFormData } = useContext(CoffeeContext);
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

  return (
    <div className="mx-40 flex justify-around gap-8">
      <div>
        <h2 className="mb-4">Complete seu pedido</h2>
        <div className="mb-3 rounded-md bg-base-card p-10">
          <div className="flex">
            <MapPinLine />
            <h3>Endereço de Entrega</h3>
          </div>
          <p>Informe o endereço onde deseja receber seu pedido</p>
          <form action="" method="get" className="mt-8 flex flex-col gap-4">
            <input
              type="text"
              className="h-10 w-52 rounded-md border border-base-button bg-base-input pl-3"
              placeholder="CEP"
              {...register('CEP')}
            />
            <input
              type="text"
              className="rounded-md border border-base-button bg-base-input pl-3"
              placeholder="Rua"
              {...register('Rua')}
            />
            <div className="flex gap-3">
              <input
                type="text"
                className="h-10 w-52 rounded-md border border-base-button bg-base-input pl-3"
                placeholder="Número"
                {...register('Numero', { valueAsNumber: true })}
              />
              <input
                type="text"
                className="h-10 rounded-md border border-base-button bg-base-input pl-3"
                placeholder="Complemento"
                {...register('Complemento')}
              />
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                className="h-10 w-52 rounded-md border border-base-button bg-base-input pl-3"
                placeholder="Bairro"
                {...register('Bairro')}
              />
              <input
                type="text"
                className="h-10 w-72 rounded-md border border-base-button bg-base-input pl-3"
                placeholder="Cidade"
                {...register('Cidade')}
              />
              <input
                type="text"
                className="h-10 w-14 rounded-md border border-base-button bg-base-input pl-3"
                placeholder="UF"
                {...register('UF')}
              />
            </div>
          </form>
        </div>
        <div className="rounded-md bg-base-card p-10">
          <div className="flex">
            <CurrencyDollar />
            <h3>Pagamento</h3>
          </div>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>

          <div className="mt-8 flex gap-3">
            <div className="flex gap-3 rounded-md bg-base-button p-4">
              <CreditCard size={16} weight="bold" className="text-my-purple" />
              <span>CARTÃO DE CRÉDITO</span>
            </div>
            <div className="flex gap-3 rounded-md bg-base-button p-4">
              <Bank size={16} weight="bold" className="text-my-purple" />
              <span>CARTÃO DE DÉBITO</span>
            </div>

            <div className="flex gap-3 rounded-md bg-base-button p-4">
              <Money size={16} weight="bold" className="text-my-purple" />
              <span>DINHEIRO</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <div className="bg-base-card px-10 pb-10 pt-4">
          {coffeesInCart.map((coffee) => (
            <ItemCheckout key={coffee.id} coffee={coffee} />
          ))}
          <div className="flex flex-col gap-3">
            <div className="mt-6 flex justify-between">
              <span>Total de itens</span>
              <p>R$ {totalItemsPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <span>Entrega</span>
              <p>R$ 3,50</p>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <p>R$ {totalOrderPrice.toFixed(2)}</p>
            </div>
          </div>
          <button
            className="mt-6 w-full rounded-md bg-my-yellow px-2 py-3 text-white"
            onClick={handleClick}
          >
            CONFIRMAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  );
}
