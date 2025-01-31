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
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Checkout() {
  const setPaymentMethod = useFormStore((state) => state.setPaymentMethod);
  const setFormData = useFormStore((state) => state.setFormData);
  const paymentMethod = useFormStore((state) => state.paymentMethod);
  const coffees = useCoffeeStore((state) => state.coffees);
  const coffeesInCart = coffees.filter((coffee) => coffee.quantity > 0);
  const navigate = useNavigate();
  const [hasPaymentError, setHasPaymentError] = useState(false);
  const newFormValidationSchema = zod.object({
    CEP: zod
      .string()
      .trim()
      .regex(
        /^(\d{5}-\d{3}|\d{8})$/, // Aceita 00000-000 ou 00000000
        'CEP inválido. Formato correto: 00000-000 ou 00000000',
      )
      .transform((cep) => cep.replace('-', '')),
    Rua: zod.string().min(1, 'Insira um nome de rua válido'),
    Numero: zod
      .number({ invalid_type_error: 'Por favor, digite um número' })
      .positive('Insira um número válido'),
    Complemento: zod.string().optional(),
    Bairro: zod.string().min(1, 'Insira um nome de bairro válido'),
    Cidade: zod.string().min(1, 'Insira um nome de cidade válido'),
    UF: zod
      .string()
      .min(1, 'Insira um UF válido')
      .max(2, 'Insira um UF válido'),
  });

  type NewFormData = zod.infer<typeof newFormValidationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewFormData>({
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
    if (paymentMethod === null) {
      setHasPaymentError(true);
      return;
    }
    navigate('/success');
  };

  const handleClick = () => {
    handleSubmit(onSubmit)();
  };

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
            <div className="flex flex-col gap-1">
              <input
                type="text"
                className={`h-10 w-52 rounded-md border bg-base-input pl-3 focus:outline-none ${
                  errors.CEP
                    ? 'border-red-500'
                    : 'border-base-button focus:border-yellow-dark'
                }`}
                placeholder="CEP"
                {...register('CEP')}
              />
              {errors.CEP && (
                <span className="text-sm text-red-500">
                  {errors.CEP?.message}
                </span>
              )}
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  className={`h-10 w-full rounded-md border bg-base-input pl-3 focus:outline-none ${
                    errors.Rua
                      ? 'border-red-500'
                      : 'border-base-button focus:border-yellow-dark'
                  }`}
                  placeholder="Rua"
                  {...register('Rua')}
                />
                {errors.Rua && (
                  <span className="text-sm text-red-500">
                    {errors.Rua?.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  className={`h-10 w-20 rounded-md border bg-base-input pl-3 focus:outline-none ${
                    errors.Numero
                      ? 'border-red-500'
                      : 'border-base-button focus:border-yellow-dark'
                  }`}
                  placeholder="Número"
                  {...register('Numero', { valueAsNumber: true })}
                />
                {errors.Numero && (
                  <span className="text-sm text-red-500">
                    {errors.Numero?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex flex-grow flex-col gap-1">
                <input
                  type="text"
                  className="h-10 w-full rounded-md border border-base-button bg-base-input pl-3 focus:border-yellow-dark focus:outline-none"
                  placeholder="Complemento (opcional)"
                  {...register('Complemento')}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <input
                type="text"
                className={`h-10 w-52 rounded-md border bg-base-input pl-3 focus:outline-none ${
                  errors.Bairro
                    ? 'border-red-500'
                    : 'border-base-button focus:border-yellow-dark'
                }`}
                placeholder="Bairro"
                {...register('Bairro')}
              />
              {errors.Bairro && (
                <span className="text-sm text-red-500">
                  {errors.Bairro.message}
                </span>
              )}
            </div>

            <div className="flex gap-3">
              <div className="flex flex-grow flex-col gap-1">
                <input
                  type="text"
                  className={`h-10 rounded-md border bg-base-input pl-3 focus:outline-none ${
                    errors.Cidade
                      ? 'border-red-500'
                      : 'border-base-button focus:border-yellow-dark'
                  }`}
                  placeholder="Cidade"
                  {...register('Cidade')}
                />
                {errors.Cidade && (
                  <span className="text-sm text-red-500">
                    {errors.Cidade.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  className={`h-10 w-14 rounded-md border bg-base-input pl-3 focus:outline-none ${
                    errors.UF
                      ? 'border-red-500'
                      : 'border-base-button focus:border-yellow-dark'
                  }`}
                  placeholder="UF"
                  {...register('UF')}
                />
                {errors.UF && (
                  <span className="text-sm text-red-500">
                    {errors.UF.message}
                  </span>
                )}
              </div>
            </div>
          </form>
        </div>

        <div className="rounded-md bg-base-card p-10">
          <div className="flex gap-2">
            <CurrencyDollar size={22} className="text-my-purple" />
            <h3 className="text-base-subtitle">Pagamento</h3>
          </div>
          <p className="ml-8 text-base-text md:ml-7">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <div className="ml-8 text-red-500 md:ml-7">
            {hasPaymentError && (
              <span>Por favor, selecione um método de pagamento</span>
            )}
          </div>
          <div className="mt-8 flex flex-col gap-3 md:flex-row">
            <button
              className={`flex gap-3 rounded-md bg-base-button p-4 hover:bg-base-hover ${paymentMethod === 'Cartão de crédito' ? 'border border-my-purple' : 'bg-base-button'}`}
              id="creditCard"
              onClick={() => {
                handleSelectPaymentMethod('Cartão de crédito');
                setHasPaymentError(false);
              }}
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
              onClick={() => {
                handleSelectPaymentMethod('Cartão de débito');
                setHasPaymentError(false);
              }}
            >
              <Bank size={16} weight="bold" className="mt-1 text-my-purple" />
              <span className="text-base-text">CARTÃO DE DÉBITO</span>
            </button>

            <button
              className={`flex gap-3 rounded-md bg-base-button p-4 hover:bg-base-hover ${paymentMethod === 'Dinheiro' ? 'border border-my-purple' : 'bg-base-button'}`}
              id="cash"
              onClick={() => {
                handleSelectPaymentMethod('Dinheiro');
                setHasPaymentError(false);
              }}
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
        <div className="w-80 rounded-bl-3xl rounded-br-md rounded-tl-md rounded-tr-3xl bg-base-card px-3 pb-10 pt-4 md:w-112 md:px-10">
          <AnimatePresence>
            {coffeesInCart.map((coffee) => (
              <motion.div
                key={coffee.id}
                initial={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: 100,
                  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                }}
              >
                <ItemCheckout coffee={coffee} />
              </motion.div>
            ))}
          </AnimatePresence>
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
            className="mt-6 w-full rounded-md bg-my-yellow px-2 py-3 text-white hover:bg-yellow-dark disabled:cursor-not-allowed"
            onClick={handleClick}
          >
            CONFIRMAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  );
}
