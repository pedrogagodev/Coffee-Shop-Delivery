import AmericanExpress from '../../public/AmericanExpress.svg';
import { Plus, Minus, Trash } from '@phosphor-icons/react';

export default function ItemCheckout() {
  return (
    <div className="flex gap-5 border-b-2 border-base-button pb-6">
      <img src={AmericanExpress} alt="" className="h-16 w-16" />
      <div className="mr-7">
        <span>Expresso tradicional</span>
        <div className="flex">
          <div className="mr-2 flex items-center gap-1 rounded-md bg-base-button px-2 py-3">
            <Plus />
            <span>1</span>
            <Minus />
          </div>
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
