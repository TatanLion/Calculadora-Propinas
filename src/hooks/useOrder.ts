import { useState } from "react"
import type { MenuItem, OrderItem } from '../types/index';



export default function useOrder(){

    const [ order, setOrder ] = useState<OrderItem[]>([])
    const [ tip, setTip ] = useState(0)

    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id);
        if(itemExist){
            // Usamos map para no mutar el original
            const updateOrder = order.map(orderItem => orderItem.id === item.id 
                ? {...orderItem, quantity: orderItem.quantity + 1}
                : orderItem
            )
            // No usamos el spread en el setOrder porque hemos generado un nuevo arreglo
            setOrder(updateOrder)
        }else{
            const newItem : OrderItem = { ...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const addMoreQuantity = (id: MenuItem['id']) => {
        setOrder(order.map(item => {
            if(item.id === id){
                return {...item, quantity: item.quantity + 1}
            }else{
                return item
            }
        }))
    }

    const lessMoreQuantity = (id: MenuItem['id']) => {
        setOrder(order.map(item => {
            if(item.id === id){
                if(item.quantity === 1){
                    return item
                    // return order.filter(item => item.id !== id);
                }else {
                    return {...item, quantity: item.quantity - 1}
                }
            }else{
                return item
            }
        }))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        addMoreQuantity,
        lessMoreQuantity,
        placeOrder
    }
}