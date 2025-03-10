import ImageHome from '../../public/ImageHome.svg';
import { Timer, ShoppingCart, Coffee, Package } from '@phosphor-icons/react';
import { Card } from '../components/Card';

import { useCoffeeStore } from '../store/coffees';
import { useEffect } from 'react';
import { useFormStore } from '../store/checkoutPage';

export function Home() {
  const coffees = useCoffeeStore((state) => state.coffees);
  const resetPaymentMethod = useFormStore((state) => state.resetPaymentMethod);

  useEffect(() => {
    resetPaymentMethod();
  }, [resetPaymentMethod]);

  return (
    <>
      <div className="mx-10 mt-24 flex flex-col justify-around md:mx-40 md:flex-row">
        <div className="md:w-144">
          <h1 className="font-baloo text-3xl font-extrabold text-base-title md:text-5xl">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="mt-4 text-xl text-base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="mt-16 grid grid-cols-1 gap-10 text-base-text md:grid-cols-2 md:whitespace-nowrap">
            <div className="flex gap-3">
              <div className="rounded-full bg-yellow-dark p-2">
                <ShoppingCart
                  size={16}
                  weight="fill"
                  className="rounded-full text-my-background"
                />
              </div>
              <p className="text-lg">Compra simples e segura</p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-base-text p-2">
                <Package
                  size={16}
                  weight="fill"
                  className="rounded-full text-my-background"
                />
              </div>

              <p className="text-lg">Embalagem mantém o café intacto</p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-my-yellow p-2">
                <Timer
                  size={16}
                  weight="fill"
                  className="rounded-full text-my-background"
                />
              </div>

              <p className="text-lg">Entrega rápida e rastreada</p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-my-purple p-2">
                <Coffee
                  size={16}
                  weight="fill"
                  className="rounded-full text-my-background"
                />
              </div>

              <p className="text-lg">O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <img src={ImageHome} alt="" className="hidden md:block" />
      </div>
      <h2 className="mb-14 mt-28 text-center text-3xl font-extrabold text-base-subtitle md:ml-40 md:text-left">
        Nossos cafés
      </h2>
      <div className="mb-60 ml-20 grid grid-cols-1 gap-14 md:ml-40 md:grid-cols-4">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  );
}
