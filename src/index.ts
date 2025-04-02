type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    pizza: Pizza
    status: "ordered" | "completed"
    orderID: number
}

const menu: Pizza[] = [
    { id:1, name: "Margherita", price: 8},
    { id:2, name: "Pepperoni", price: 10},
    { id:3, name: "Hawaiian", price: 10},
    { id:4, name: "Veggie", price: 9}
]

const orderQueue: Order[] = [];
let cashInRegister: number = 100
let nextOrderId: number = 1

function addNewPizza(pizza: Pizza){
    menu.push(pizza)
}

function placeOrder(pizzaName:string){
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

function completeOrder(orderID:number){
    const order = orderQueue.find(obj => obj.orderID == orderID)

    if(!order){
        console.error('order id not found')
        return
    }
    order.status = 'completed'

    return order
}

//type narrowing
export function getPizzaDetail(identifier: string | number){
    if(typeof identifier == "string"){
        return menu.find(pizzaObj => pizzaObj.name.toLowerCase() === identifier.toLowerCase())
    }else if(typeof identifier == "number"){
        return menu.find(pizzaObj => pizzaObj.id === identifier)
    }else{
        throw new TypeError("Parameter indentifier must be either a string or a number")
    }
}


addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)