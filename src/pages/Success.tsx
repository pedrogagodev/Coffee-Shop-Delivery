import { useContext, useEffect } from 'react';
import { CoffeeContext } from '../contexts/CoffeeContext';
import { useNavigate } from 'react-router';

export function Success() {
  const { formData } = useContext(CoffeeContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!formData) {
      navigate('/checkout');
    }
  }, [formData, navigate]);

  if (!formData) {
    return null;
  }

  return <div></div>;
}
