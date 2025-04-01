
const menu = [
    { name: "margherita", price: 8},
    { name: "Pepperoni", price: 10},
    { name: "Hawaiian", price: 10},
    { name: "Veggie", price: 9}
]

const orderQueue = [];
let cashInRegister = 100
let nextOrderId = 1

function addNewPizza(pizza){
    menu.push(pizza)
}

function placeOrder(pizzaName:string){
    const selectedPizza = menu.find(obj => obj.name == pizzaName)

    if(!selectedPizza){
        console.error('pizza not found')
        return
    }

    cashInRegister = cashInRegister + selectedPizza.price 

    const newOrder = {
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

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)