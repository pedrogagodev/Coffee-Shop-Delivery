import { Trash } from '@phosphor-icons/react';
import { CoffeeQuantity } from './CoffeeQuantity';
import { CoffeeContext, CoffeeProps } from '../contexts/CoffeeContext';
import { useContext } from 'react';

interface ItemCheckoutProps {
  coffee: CoffeeProps;
}

export default function ItemCheckout({ coffee }: ItemCheckoutProps) {
  const { handleQuantityChange } = useContext(CoffeeContext);
  function handleRemoveCoffee() {
    handleQuantityChange(coffee.id, 0);
  }
  return (
    <div className="flex gap-5 border-b-2 border-base-button pb-6 pt-6">
      <img src={coffee.image} alt={coffee.name} className="h-16 w-16" />
      <div className="mr-7">
        <span>{coffee.name}</span>
        <div className="flex">
          <CoffeeQuantity coffeeId={coffee.id} coffee={coffee} />
          <button
            className="flex gap-1 self-center rounded-md bg-base-button p-2"
            onClick={handleRemoveCoffee}
          >
            <Trash size={16} className="mt-1 text-my-purple" weight="bold" />
            <span>REMOVER</span>
          </button>
        </div>
      </div>
      <p>R$ {coffee.price.toFixed(2)}</p>
    </div>
  );
}
