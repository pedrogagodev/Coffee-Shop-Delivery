import { createContext, ReactNode, useState } from 'react';

export interface CoffeeProps {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
  price: number;
  quantity: number;
}

interface CoffeeContextProps {
  coffees: CoffeeProps[];
  handleQuantityChange: (coffeeId: number, newQuantity: number) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextProps);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([
    {
      id: 0,
      name: 'Expresso Tradicional',
      image: '../public/TraditionalEspresso.svg',
      description: 'O tradicional café feito com água quente e grãos moídos',
      features: ['TRADICIONAL'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 1,
      name: 'Expresso Americano',
      image: '../public/AmericanExpress.svg',
      description: 'Expresso diluído, menos intenso que o tradicional',
      features: ['TRADICIONAL'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 2,
      name: 'Expresso Cremoso',
      image: '../public/CreamyEspresso.svg',
      description: 'Café expresso tradicional com espuma cremosa',
      features: ['TRADICIONAL'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 3,
      name: 'Expresso Gelado',
      image: '../public/IcedEspresso.svg',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      features: ['TRADICIONAL', 'GELADO'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 4,
      name: 'Café com Leite',
      image: '../public/CoffeeWithMilk.svg',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      features: ['TRADICIONAL', 'COM LEITE'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 5,
      name: 'Latte',
      image: './public/Latte.svg',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      features: ['TRADICIONAL', 'COM LEITE'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 6,
      name: 'Capuccino',
      image: '../public/Capuccino.svg',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      features: ['TRADICIONAL', 'COM LEITE'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 7,
      name: 'Macchiato',
      image: '../public/Macchiato.svg',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      features: ['TRADICIONAL', 'COM LEITE'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 8,
      name: 'Mocaccino',
      image: '../public/Mocaccino.svg',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      features: ['TRADICIONAL', 'COM LEITE'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 9,
      name: 'Chocolate Quente',
      image: '../public/HotChocolate.svg',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      features: ['ESPECIAL', 'COM LEITE'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 10,
      name: 'Cubano',
      image: '../public/Cuban.svg',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      features: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 11,
      name: 'Havaiano',
      image: '../public/Hawaiian.svg',
      description: 'Bebida adocicada preparada com café e leite de coco',
      features: ['ESPECIAL'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 12,
      name: 'Árabe',
      image: '../public/Arabic.svg',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      features: ['ESPECIAL'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 13,
      name: 'Irlandês',
      image: '../public/Irish.svg',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      features: ['ESPECIAL', 'ALCOÓLICO'],
      price: 9.9,
      quantity: 0,
    },
  ]);

  const handleQuantityChange = (coffeeId: number, newQuantity: number) => {
    setCoffees((prevCoffees) =>
      prevCoffees.map((coffee) =>
        coffee.id === coffeeId ? { ...coffee, quantity: newQuantity } : coffee,
      ),
    );
  };
  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        handleQuantityChange,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
