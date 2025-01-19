import { Plus, Minus } from '@phosphor-icons/react';
import { useContext, useEffect, useState } from 'react';
import { CoffeeContext } from '../contexts/CoffeeContext';
import { CoffeeProps } from '../contexts/CoffeeContext';

interface CoffeeQuantityProps {
  coffeeId: number;
  coffee: CoffeeProps;
}

export function CoffeeQuantity({ coffeeId }: CoffeeQuantityProps) {
  const { handleQuantityChange } = useContext(CoffeeContext);

  const [newQuantity, setNewQuantity] = useState(0);

  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    if (isUpdated) {
      handleQuantityChange(coffeeId, newQuantity);
      setIsUpdated(false);
    }
  }, [newQuantity, coffeeId, handleQuantityChange, isUpdated]);

  function handleMinus() {
    setNewQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
    setIsUpdated(true);
  }

  function handlePlus() {
    setNewQuantity((prevQuantity) => prevQuantity + 1);
    setIsUpdated(true);
  }
  return (
    <div className="mr-2 flex items-center gap-1 rounded-md bg-base-button px-2 py-3">
      <Minus onClick={handleMinus} className="cursor-pointer" />
      <span>{newQuantity}</span>
      <Plus onClick={handlePlus} className="cursor-pointer" />
    </div>
  );
}
