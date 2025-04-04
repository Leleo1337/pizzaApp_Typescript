type Pizza = {
    id?: number
    name: string
    price: number
}

type Order = {
    pizza: Pizza
    status: "ordered" | "completed"
    orderID: number
}


let nextPizzaId: number = 1
const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8},
    { id: nextPizzaId++, name: "Pepperoni", price: 10},
    { id: nextPizzaId++, name: "Hawaiian", price: 10},
    { id: nextPizzaId++, name: "Veggie", price: 9}
]

const orderQueue: Order[] = [];
let cashInRegister: number = 100
let nextOrderId: number = 1

function addNewPizza(pizza: Omit<Pizza, "id">): Pizza{
    const newPizza = { id: nextPizzaId++, ...pizza }
    menu.push(newPizza)
    return newPizza
}

addNewPizza({name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({name: "BBQ Chicken", price: 12 })
addNewPizza({name: "Spicy Sausage", price: 11 })

function placeOrder(pizzaName:string): Order | undefined{
    const selectedPizza = menu.find(obj => obj.name == pizzaName)
    
    if(!selectedPizza){
        console.error('pizza not found')
        return 
    }
    
    cashInRegister = cashInRegister + selectedPizza.price 
    
    const newOrder: Order = {
        pizza: selectedPizza,
        status: "ordered",
        orderID: nextOrderId
    }
    nextOrderId = nextOrderId + 1
    orderQueue.push(newOrder)
    
    return newOrder
}

function completeOrder(orderID:number): Order | undefined{
    const order = orderQueue.find(obj => obj.orderID == orderID)

    if(!order){
        console.error('order id not found')
        return
    }
    order.status = 'completed'

    return order
}

//type narrowing
export function getPizzaDetail(identifier: string | number): Pizza | undefined{
    if(typeof identifier == "string"){
        return menu.find(pizzaObj => pizzaObj.name.toLowerCase() === identifier.toLowerCase())
    }else if(typeof identifier == "number"){
        return menu.find(pizzaObj => pizzaObj.id === identifier)
    }else{
        throw new TypeError("Parameter indentifier must be either a string or a number")
    }
}


placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)