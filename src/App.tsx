import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderContents from './components/OrderContents';
import OrderTotals from './components/OrderTotals';
import TipPercentageForm from './components/TipPercentageForm';

function App() {

  const { order, addItem, removeItem, tip, setTip, addMoreQuantity, lessMoreQuantity, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl text-white font-black">Calculadora de Propinas y Consumos</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-bold">Menú</h2>
          {/* MenuItem */}
          <div className="space-y-3 mt-5">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
          {/* MenuItem */}
        </div>

        {/* Consumo */}
        <div className="border border-dashed border-s-teal-300 p-5 rounded-lg space-y-10">

          {order.length ?
            (
              <>
                <OrderContents
                  order={order}
                  removeItem={removeItem}
                  addMoreQuantity={addMoreQuantity}
                  lessMoreQuantity={lessMoreQuantity}
                />

                <TipPercentageForm
                  tip={tip}
                  setTip={setTip}
                />

                <OrderTotals
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
            ) : (
              <p className="text-center">La orden esta vacia</p>
            )}

        </div>
        {/* Consumo */}
      </main>
    </>
  )
}

export default App
