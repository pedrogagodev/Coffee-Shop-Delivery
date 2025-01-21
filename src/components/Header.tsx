import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import Logo from '../../public/Logo.svg';

import { useNavigate, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CoffeeContext } from '../contexts/CoffeeContext';

export function Header() {
  const { coffees } = useContext(CoffeeContext);
  const navigate = useNavigate();
  const coffeesInCart = coffees.filter((coffee) => coffee.quantity > 0);
  const handleClick = (): void | Promise<void> => {
    if (coffeesInCart.length !== 0) {
      navigate('checkout');
    }
  };
  return (
    <div className="mx-40 my-8 flex justify-between">
      <NavLink to="/" title="Home">
        <img src={Logo} alt="Logo" className="cursor-pointer" />
      </NavLink>

      <div className="flex gap-3">
        <div className="flex gap-1 rounded-md bg-purple-light p-2">
          <MapPin size={22} weight="fill" className="text-my-purple" />
          <span className="text-purple-dark">Porto Alegre, RS</span>
        </div>
        <div
          className="flex cursor-pointer items-center rounded-md bg-yellow-light p-2"
          onClick={handleClick}
        >
          <ShoppingCart size={22} weight="fill" className="text-yellow-dark" />
        </div>
      </div>
    </div>
  );
}
