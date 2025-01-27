import { Plus, Minus } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

import { Coffee, useCoffeeStore } from '../store/coffees';

interface CoffeeQuantityProps {
  coffeeId: number;
  coffee: Coffee;
}

export function CoffeeQuantity({ coffeeId, coffee }: CoffeeQuantityProps) {
  const { setCoffeeQuantity } = useCoffeeStore();

  const [newQuantity, setNewQuantity] = useState(coffee.quantity);

  useEffect(() => {
    setCoffeeQuantity(coffeeId, newQuantity);
  }, [newQuantity, coffeeId, setCoffeeQuantity]);

  function handleMinus() {
    setNewQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  }

  function handlePlus() {
    setNewQuantity((prevQuantity) => prevQuantity + 1);
  }
  return (
    <div className="mr-2 flex items-center gap-1 rounded-md bg-base-button p-1 md:px-2 md:py-3">
      <Minus onClick={handleMinus} className="cursor-pointer" />
      <span>{newQuantity}</span>
      <Plus onClick={handlePlus} className="cursor-pointer" />
    </div>
  );
}
