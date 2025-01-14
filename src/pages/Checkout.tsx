import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react';

export function Checkout() {
  return (
    <div className="mx-40 flex justify-around gap-8">
      <div>
        <h2 className="mb-4">Complete seu pedido</h2>
        <div className="mb-3 rounded-md bg-base-card p-10">
          <div className="flex">
            <MapPinLine />
            <h3>Endereço de Entrega</h3>
          </div>
          <p>Informe o endereço onde deseja receber seu pedido</p>
          <form action="" method="get" className="mt-8 grid grid-rows-4 gap-4">
            <input
              type="text"
              className="h-10 w-52 rounded-md border border-base-button bg-base-input pl-3"
              placeholder="CEP"
            />
            <input
              type="text"
              className="rounded-md border border-base-button bg-base-input pl-3"
              placeholder="Rua"
            />
            <div className="flex gap-3">
              <input
                type="text"
                className="h-10 w-52 rounded-md border border-base-button bg-base-input pl-3"
                placeholder="Número"
              />
              <input
                type="text"
                className="h-10 rounded-md border border-base-button bg-base-input pl-3"
                placeholder="Complemento"
              />
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                className="h-10 w-52 rounded-md border border-base-button bg-base-input pl-3"
                placeholder="Bairro"
              />
              <input
                type="text"
                className="h-10 w-72 rounded-md border border-base-button bg-base-input pl-3"
                placeholder="Cidade"
              />
              <input
                type="text"
                className="h-10 w-14 rounded-md border border-base-button bg-base-input pl-3"
                placeholder="UF"
              />
            </div>
          </form>
        </div>
        <div className="rounded-md bg-base-card p-10">
          <div className="flex">
            <CurrencyDollar />
            <h3>Pagamento</h3>
          </div>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>

          <div className="mt-8 flex gap-3">
            <div className="flex gap-3 rounded-md bg-base-button p-4">
              <CreditCard size={16} weight="bold" className="text-my-purple" />
              <span>CARTÃO DE CRÉDITO</span>
            </div>
            <div className="flex gap-3 rounded-md bg-base-button p-4">
              <Bank size={16} weight="bold" className="text-my-purple" />
              <span>CARTÃO DE DÉBITO</span>
            </div>

            <div className="flex gap-3 rounded-md bg-base-button p-4">
              <Money size={16} weight="bold" className="text-my-purple" />
              <span>DINHEIRO</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <div className="bg-base-card p-10">
          <p className="h-56 w-96">componente item</p>
          <div className="flex flex-col gap-3">
            <div className="mt-6 flex justify-between">
              <span>Total de itens</span>
              <p>R$ 29,70</p>
            </div>
            <div className="flex justify-between">
              <span>Entrega</span>
              <p>R$ 3,50</p>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <p>R$ 33,20</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-my-yellow px-2 py-3 text-white">
            CONFIRMAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  );
}
