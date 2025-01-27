import { ShoppingCart } from '@phosphor-icons/react';
import { CoffeeQuantity } from './CoffeeQuantity';

import { useNavigate } from 'react-router-dom';

import { Coffee, useCoffeeStore } from '../store/coffees';

interface CardProps {
  coffee: Coffee;
}

export function Card({ coffee }: CardProps) {
  const { coffees } = useCoffeeStore();
  const navigate = useNavigate();
  const handleClick = (): void | Promise<void> => {
    if (coffees.some((coffee) => coffee.quantity > 0)) {
      navigate('checkout');
    }
  };
  return (
    <div className="relative flex h-80 w-64 flex-col items-center rounded-bl-3xl rounded-br-md rounded-tl-md rounded-tr-3xl bg-base-card">
      <div key={coffee.id}>
        <img
          src={coffee.image}
          alt={coffee.name}
          className="absolute -top-6 left-16 h-32 w-32"
        />
        <ul className="mt-28 flex justify-center gap-1 text-xs font-bold text-yellow-dark">
          {coffee.features.map((feature) => (
            <li
              className="rounded-full bg-yellow-light px-2 py-1"
              key={feature}
            >
              {feature}
            </li>
          ))}
        </ul>
        <h3 className="text-bold mt-4 text-center font-baloo text-xl text-base-subtitle">
          {coffee.name}
        </h3>
        <p className="mb-8 mt-2 w-56 text-center text-sm text-base-label">
          {coffee.description}
        </p>
        <div className="flex gap-1">
          <span className="mt-4 text-sm font-normal text-base-text">R$</span>
          <span className="mr-6 mt-2 font-baloo text-2xl font-extrabold text-base-text">
            {coffee.price.toFixed(2)}
          </span>
          <CoffeeQuantity coffeeId={coffee.id} coffee={coffee} />
          <button
            className="rounded-md bg-purple-dark p-2"
            onClick={handleClick}
          >
            <ShoppingCart size={22} weight="fill" className="text-base-card" />
          </button>
        </div>
      </div>
    </div>
  );
}
