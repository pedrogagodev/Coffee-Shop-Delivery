import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react';

import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormStore } from '../store/checkoutPage';

import Illustration from '../../public/Illustration.svg';
import { useCoffeeStore } from '../store/coffees';

export function Success() {
  const clearCart = useCoffeeStore((state) => state.clearCart);
  const formData = useFormStore((state) => state.formData);
  const paymentMethod = useFormStore((state) => state.paymentMethod);
  const navigate = useNavigate();

  useEffect(() => {
    if (!formData) {
      navigate('/checkout');
      return;
    }
    clearCart();
  }, [formData, navigate, clearCart]);

  if (!formData) {
    return null;
  }

  return (
    <div className="mx-10 mt-10 flex flex-col gap-24 md:mx-40 md:mt-20 md:flex-row md:gap-60">
      <div>
        <h1 className="mb-1 font-baloo text-3xl font-extrabold text-yellow-dark md:text-5xl">
          Uhu! Pedido Confirmado
        </h1>
        <p className="mb-10 text-lg text-base-subtitle md:text-2xl">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="mb-6 w-full rounded-md bg-gradient-to-r from-my-yellow to-my-purple p-0.5">
          <div className="roundedbr-md flex flex-col gap-8 rounded-bl-3xl rounded-tl-md rounded-tr-3xl bg-white p-10">
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-my-purple pl-2 pt-2">
                <MapPin size={16} weight="fill" className="text-white" />
              </div>
              <div>
                <p>
                  Entrega em{' '}
                  <span className="font-bold">
                    Rua {formData.Rua}, {formData.Numero}
                  </span>
                </p>
                <p>
                  {formData.Bairro} - {formData.Cidade}, {formData.UF}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-my-yellow pl-2 pt-2">
                <Timer size={16} weight="fill" className="text-white" />
              </div>
              <div>
                <p>Previsão de entrega</p>
                <p className="font-bold">20 min - 30 min</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-yellow-dark pl-2 pt-2">
                <CurrencyDollar
                  size={16}
                  weight="fill"
                  className="text-white"
                />
              </div>
              <div>
                <p>Pagamento na entrega</p>
                <span className="font-bold">{paymentMethod}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          className="md:mt-32"
          initial={{ transform: 'translateX(-100px)' }}
          animate={{ transform: 'translateX(0px)' }}
          transition={{ type: 'spring' }}
        >
          <img src={Illustration} alt="Illustration" className="self-end" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
