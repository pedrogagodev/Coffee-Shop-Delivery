import ImageHome from '../../public/ImageHome.svg';
import { Timer, ShoppingCart, Coffee, Package } from '@phosphor-icons/react';

export function Home() {
  return (
    <>
      <div className="mx-40 mt-24 flex justify-around">
        <div>
          <h1 className="text-5xl font-extrabold">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="mt-4 text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="mt-16 grid grid-cols-2 gap-10">
            <div className="flex gap-3">
              <div className="rounded-full bg-yellow-dark p-2">
                <ShoppingCart
                  size={16}
                  weight="fill"
                  className="rounded-full text-my-background"
                />
              </div>
              <p>Compra simples e segura</p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-base-text p-2">
                <Package
                  size={16}
                  weight="fill"
                  className="rounded-full text-my-background"
                />
              </div>

              <p>Compra simples e segura</p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-my-yellow p-2">
                <Timer
                  size={16}
                  weight="fill"
                  className="rounded-full text-my-background"
                />
              </div>

              <p>Compra simples e segura</p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-my-purple p-2">
                <Coffee
                  size={16}
                  weight="fill"
                  className="rounded-full text-my-background"
                />
              </div>

              <p>Compra simples e segura</p>
            </div>
          </div>
        </div>
        <img src={ImageHome} alt="" />
      </div>
    </>
  );
}
