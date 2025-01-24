import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
    addMoreQuantity: (id: MenuItem['id']) => void
    lessMoreQuantity: (id: MenuItem['id']) => void
}

export default function OrderContents({ order, removeItem, addMoreQuantity, lessMoreQuantity }: OrderContentsProps) {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>

            <div className="space-y-3 mt-5">
                {order.map(item => (
                    <div key={item.id} className="w-full h-auto py-5 flex justify-between items-center border-t border-gray-300 last-of-type:border-b ">
                        <div className="p-4 border rounded-lg shadow-md bg-white w-5/6">
                            <p className="text-xl font-semibold text-gray-800 mb-2">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <div className="flex items-center gap-4">
                                <button
                                    className={`w-8 h-8 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center border border-black hover:bg-yellow-500 transition ${item.quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    onClick={() => lessMoreQuantity(item.id)}
                                >
                                    -
                                </button>
                                <p className="text-lg text-gray-700">
                                    Cantidad: <span className="font-bold text-gray-900">{item.quantity}</span>
                                </p>
                                <button
                                    className="w-8 h-8 bg-blue-400 text-white font-bold rounded-full flex items-center justify-center border border-black hover:bg-blue-500 transition"
                                    onClick={() => addMoreQuantity(item.id)}
                                >
                                    +
                                </button>
                            </div>
                            <p className="font-bold mt-3">Total Item: {''} 
                                <span className="font-semibold">{formatCurrency(item.price * item.quantity)}</span>
                            </p>
                        </div>
                        <button
                            className="bg-red-600 w-7 h-7 rounded-full text-white font-extrabold"
                            onClick={() => removeItem(item.id)}
                        >
                            X
                        </button>

                    </div>
                ))}
            </div>
        </div>
    )
}
