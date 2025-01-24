import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({ order, tip, placeOrder } : OrderTotalsProps) {

    // Dejamos sin llaves del return ya que generario error con el typeo de void
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0 ), [order])

    const tipAmmount = useMemo(() => subtotalAmount * tip, [tip, order])

    const totalAmmount = useMemo(() => subtotalAmount + tipAmmount, [tip, order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-bold">
                    {formatCurrency(subtotalAmount)}
                </span>
            </p>
            <p>Propina: {''}
                <span className="font-bold">
                    {formatCurrency(tipAmmount)}
                </span>
            </p>
            <p>Total a pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmmount)}</span>
            </p>
        </div>

        <button 
            className={`w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10`}
            disabled={totalAmmount == 0}
            onClick={placeOrder}
        >
            Guardar Orden
        </button>
    </>
  )
}
