import { Plus, Minus } from '@phosphor-icons/react';

export function CoffeeQuantity() {
  return (
    <div className="mr-2 flex items-center gap-1 rounded-md bg-base-button px-2 py-3">
      <Minus />
      <span>1</span>
      <Plus />
    </div>
  );
}
