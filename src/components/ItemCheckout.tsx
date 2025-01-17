import AmericanExpress from '../../public/AmericanExpress.svg';
import { Trash } from '@phosphor-icons/react';
import { CoffeeQuantity } from './CoffeeQuantity';

export default function ItemCheckout() {
  return (
    <div className="flex gap-5 border-b-2 border-base-button pb-6">
      <img src={AmericanExpress} alt="" className="h-16 w-16" />
      <div className="mr-7">
        <span>Expresso tradicional</span>
        <div className="flex">
          <CoffeeQuantity />
          <button className="flex gap-1 self-center rounded-md bg-base-button p-2">
            <Trash size={16} className="mt-1 text-my-purple" weight="bold" />
            <span>REMOVER</span>
          </button>
        </div>
      </div>
      <p>R$ 9,90</p>
    </div>
  );
}
