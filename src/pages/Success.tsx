import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react';

import { useContext, useEffect } from 'react';
import { CoffeeContext } from '../contexts/CoffeeContext';
import { useNavigate } from 'react-router';

import Illustration from '../../public/Illustration.svg';

export function Success() {
  const { formData, paymentMethod } = useContext(CoffeeContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!formData) {
      navigate('/checkout');
    }
  }, [formData, navigate]);

  if (!formData) {
    return null;
  }

  return (
    <div className="mx-40 mt-20 flex gap-24">
      <div>
        <h1 className="mb-1 text-3xl font-extrabold text-yellow-dark">
          Uhu! Pedido Confirmado
        </h1>
        <p className="mb-10 text-nowrap text-xl text-base-subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="w-full rounded-md bg-gradient-to-r from-my-yellow to-my-purple p-0.5">
          <div className="roundedbr-md flex flex-col gap-8 rounded-bl-3xl rounded-tl-md rounded-tr-3xl bg-white p-10">
            <div className="flex">
              <MapPin />
              <div>
                <p>
                  Entrega em{' '}
                  <span>
                    Rua {formData.Rua}, {formData.Numero}
                  </span>
                </p>
                <p>
                  {formData.Bairro} - {formData.Cidade}, {formData.UF}
                </p>
              </div>
            </div>
            <div className="flex">
              <Timer />
              <div>
                <p>Previsão de entrega</p>
                <p>20 min - 30 min</p>
              </div>
            </div>
            <div className="flex">
              <CurrencyDollar />
              <div>
                <p>Pagamento na entrega</p>
                <span>{paymentMethod}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={Illustration} alt="Illustration" className="self-end" />
    </div>
  );
}
