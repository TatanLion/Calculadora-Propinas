export type MenuItem = {
    id: number
    name: string
    price: number
}

// NOTE Heredamos lo de MenuItem pero agregamos lo que requerimos
export type OrderItem = MenuItem & {
    quantity: number
}