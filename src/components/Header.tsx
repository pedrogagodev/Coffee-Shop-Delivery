import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import Logo from '../../public/Logo.svg';

import { useNavigate, NavLink } from 'react-router-dom';

import { useCoffeeStore } from '../store/coffees';
import { toast } from 'react-toastify';

export function Header() {
  const navigate = useNavigate();
  const coffees = useCoffeeStore((state) => state.coffees);
  const coffeesInCart = coffees.filter((coffee) => coffee.quantity > 0);
  const notify = () =>
    toast.error(
      'Não é possível ir para a página de pagamento. Não há itens no carrinho',
      { theme: 'colored' },
    );

  const totalItemsInCart = coffeesInCart.reduce((total, coffee) => {
    return total + coffee.quantity;
  }, 0);
  const handleClick = (): void | Promise<void> => {
    if (coffeesInCart.length !== 0) {
      navigate('checkout');
    } else {
      notify();
    }
  };
  return (
    <div className="mx-10 my-8 flex justify-between md:mx-40">
      <NavLink to="/" title="Home">
        <img src={Logo} alt="Logo" className="cursor-pointer" />
      </NavLink>

      <div className="flex gap-3">
        <div className="flex gap-1 rounded-md bg-purple-light p-2">
          <MapPin size={22} weight="fill" className="text-my-purple" />
          <span className="text-purple-dark">Porto Alegre, RS</span>
        </div>
        <div
          className="relative flex cursor-pointer items-center rounded-md bg-yellow-light p-2"
          onClick={handleClick}
        >
          <div className="absolute right-0 top-0 flex h-5 w-5 -translate-y-2 translate-x-2 justify-center rounded-full bg-yellow-dark text-white">
            {totalItemsInCart}
          </div>
          <ShoppingCart size={22} weight="fill" className="text-yellow-dark" />
        </div>
      </div>
    </div>
  );
}
