import { Trash } from '@phosphor-icons/react';
import { CoffeeQuantity } from './CoffeeQuantity';
import { Coffee } from '../store/coffees';

import { useCoffeeStore } from '../store/coffees';

interface ItemCheckoutProps {
  coffee: Coffee;
}

export default function ItemCheckout({ coffee }: ItemCheckoutProps) {
  const { setCoffeeQuantity } = useCoffeeStore();
  function handleRemoveCoffee() {
    setCoffeeQuantity(coffee.id, 0);
  }
  return (
    <div className="flex gap-3 border-b-2 border-base-button pb-6 pt-6 md:gap-5">
      <img src={coffee.image} alt={coffee.name} className="h-16 w-16" />
      <div className="md:mr-7">
        <span>{coffee.name}</span>
        <div className="flex">
          <CoffeeQuantity coffeeId={coffee.id} coffee={coffee} />
          <button
            className="flex gap-1 self-center rounded-md bg-base-button p-2"
            onClick={handleRemoveCoffee}
          >
            <Trash size={16} className="mt-1 text-my-purple" weight="bold" />
            <span className="text-sm">REMOVER</span>
          </button>
        </div>
      </div>
      <p className="whitespace-nowrap">R$ {coffee.price.toFixed(2)}</p>
    </div>
  );
}
