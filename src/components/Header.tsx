import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import Logo from '../../public/Logo.svg';

import { NavLink } from 'react-router-dom';

export function Header() {
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
        <div className="flex cursor-pointer items-center rounded-md bg-yellow-light p-2">
          <NavLink to="/checkout" title="Checkout">
            <ShoppingCart
              size={22}
              weight="fill"
              className="text-yellow-dark"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
