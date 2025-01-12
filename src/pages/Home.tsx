import ImageHome from '../../public/ImageHome.svg';
import { Timer, ShoppingCart, Coffee, Package } from '@phosphor-icons/react';
import { Card } from '../components/Card';

const coffees = [
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
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
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
];

export function Home() {
  return (
    <>
      <div className="mx-40 mt-24 flex justify-around">
        <div>
          <h1 className="text-5xl font-extrabold">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="mt-4 text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="mt-16 grid grid-cols-2 gap-10">
            <div className="flex gap-3">
              <div className="rounded-full bg-yellow-dark p-2">
                <ShoppingCart
                  size={16}
                  weight="fill"
                  className="rounded-full text-my-background"
                />
              </div>
              <p>Compra simples e segura</p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-base-text p-2">
                <Package
                  size={16}
                  weight="fill"
                  className="rounded-full text-my-background"
                />
              </div>

              <p>Compra simples e segura</p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-my-yellow p-2">
                <Timer
                  size={16}
                  weight="fill"
                  className="rounded-full text-my-background"
                />
              </div>

              <p>Compra simples e segura</p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-my-purple p-2">
                <Coffee
                  size={16}
                  weight="fill"
                  className="rounded-full text-my-background"
                />
              </div>

              <p>Compra simples e segura</p>
            </div>
          </div>
        </div>
        <img src={ImageHome} alt="" />
      </div>
      <h2 className="mb-14 ml-40 mt-36 text-3xl font-extrabold">
        Nossos cafés
      </h2>
      <div className="mx-40 grid grid-cols-4 gap-14">
        {coffees.map((coffee) => (
          <Card key={coffee.id} {...coffee} />
        ))}
      </div>
    </>
  );
}
