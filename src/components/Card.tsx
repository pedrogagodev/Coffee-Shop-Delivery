import { ShoppingCart } from '@phosphor-icons/react';
import { CoffeeQuantity } from './CoffeeQuantity';

interface CoffeeProps {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
  price: number;
  quantity: number;
}

export function Card({
  id,
  name,
  image,
  description,
  features,
  price,
  quantity,
}: CoffeeProps) {
  return (
    <div className="relative flex h-80 w-64 flex-col items-center rounded-bl-3xl rounded-br-md rounded-tl-md rounded-tr-3xl bg-base-card">
      <img src={image} alt={name} className="absolute -top-6 h-32 w-32" />
      <ul className="mt-28 flex gap-1 text-xs font-bold text-yellow-dark">
        {features.map((feature) => (
          <li className="rounded-full bg-yellow-light px-2 py-1" key={feature}>
            {feature}
          </li>
        ))}
      </ul>
      <h3 className="text-bold mt-4 text-xl text-base-subtitle">{name}</h3>
      <p className="mb-8 mt-2 w-56 text-center text-sm text-base-label">
        {description}
      </p>
      <div className="flex gap-1">
        <span className="mt-5 text-sm font-normal text-base-text">R$</span>
        <span className="mr-6 mt-2 text-2xl font-bold text-base-text">
          {price.toFixed(2)}
        </span>
        <CoffeeQuantity />
        <button className="rounded-md bg-purple-dark p-2">
          <ShoppingCart size={22} weight="fill" className="text-base-card" />
        </button>
      </div>
    </div>
  );
}
