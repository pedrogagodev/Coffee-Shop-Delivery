import { ShoppingCart } from '@phosphor-icons/react';
import { CoffeeQuantity } from './CoffeeQuantity';

import { NavLink } from 'react-router-dom';
import { CoffeeProps } from '../contexts/CoffeeContext';

interface CardProps {
  coffee: CoffeeProps;
}

export function Card({ coffee }: CardProps) {
  return (
    <div className="relative flex h-80 w-64 flex-col items-center rounded-bl-3xl rounded-br-md rounded-tl-md rounded-tr-3xl bg-base-card">
      <img
        src={coffee.image}
        alt={coffee.name}
        className="absolute -top-6 h-32 w-32"
      />
      <ul className="mt-28 flex gap-1 text-xs font-bold text-yellow-dark">
        {coffee.features.map((feature) => (
          <li className="rounded-full bg-yellow-light px-2 py-1" key={feature}>
            {feature}
          </li>
        ))}
      </ul>
      <h3 className="text-bold mt-4 text-xl text-base-subtitle">
        {coffee.name}
      </h3>
      <p className="mb-8 mt-2 w-56 text-center text-sm text-base-label">
        {coffee.description}
      </p>
      <div className="flex gap-1">
        <span className="mt-5 text-sm font-normal text-base-text">R$</span>
        <span className="mr-6 mt-2 text-2xl font-bold text-base-text">
          {coffee.price.toFixed(2)}
        </span>
        <CoffeeQuantity coffeeId={coffee.id} coffee={coffee} />
        <button className="rounded-md bg-purple-dark p-2">
          <NavLink to="/checkout" title="Cart">
            <ShoppingCart size={22} weight="fill" className="text-base-card" />
          </NavLink>
        </button>
      </div>
    </div>
  );
}
