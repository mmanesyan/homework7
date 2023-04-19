// CoffeeShop
// Properties:
// name: a string (basically, of the shop)
// menu: an array of items (of object type), with each item containing the item (name of the item), type
// (whether food or a drink) and price.
// orders: an empty array
// Methods:
// addOrder: adds the name of the item to the end of the orders array if it exists on the menu.
// Otherwise, return "This item is currently unavailable!"
// fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is
// empty, return "All orders have been fulfilled!" listOrders: returns the list of orders taken, otherwise, an
// empty array.
// dueAmount: returns the total amount due for the orders taken.
// cheapestItem: returns the name of the cheapest item on the menu.
// drinksOnly: returns only the item names of type drink from the menu.
// foodOnly: returns only the item names of type food from the menu.
// IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.
// Examples:
// tcs.addOrder("hot cocoa"); // "This item is currently unavailable!"
// // Tesha's coffee shop does not sell hot cocoa 
// tcs.addOrder("iced tea"); // "This item is currently unavailable!"
// // specifying the variant of "iced tea" will help the process 
// tcs.addOrder("cinnamon roll"); // "Order added!" 
// tcs.addOrder("iced coffee"); // "Order added!" 
// tcs.listOrders; // ["cinnamon roll", "iced coffee"]
// // the list of all the items in the current order 
// tcs.dueAmount(); // 2.17 
// tcs.fulfillOrder(); // "The cinnamon roll is ready!" 
// tcs.fulfillOrder(); // "The iced coffee is ready!" 
// tcs.fulfillOrder(); // "All orders have been fulfilled!"
// // all orders have been presumably served 
// tcs.listOrders(); // []
// // an empty array is returned if all orders have been exhausted 
// tcs.dueAmount(); // 0.0
// // no new orders taken, expect a zero payable 
// tcs.cheapestItem(); // "lemonade" 
// tcs.drinksOnly(); // ["orange juice", "lemonade", "cranberry juice", 
// "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot 
// chocolate", "iced coffee"] 
// tcs.foodOnly(); // ["tuna sandwich", "ham and cheese sandwich", "bacon and 
// egg", "steak", "hamburger", "cinnamon roll"]

class CoffeeShop {
    constructor(name, menu){
        this.name = name;
        this.menu = menu;
        this.orders = [];
    }
    addOrder(itemName){
        for(let j=0;j<this.menu.length;j++){
            for(let i=0;i<itemName.length;i++){
                let order=itemName[i]
                let menuItem = this.menu[j]
                if(order===this.menu[j].item){
                    this.orders.push(order)
                        // console.log("Order added");
                    }
                }
            }
            // console.log("This item is currently unavailbale.")
            // return this.orders
        }
        fulfillOrder(){
            if(this.orders){
                return  `The ${item} is ready!`
            }
            return  "All orders have been fulfilled!"
        }
        listOrders(){
            if (this.orders){
                return this.orders
            }
            return []
        }
        dueAmount(){
            let total = 0
                for(let i=0; i < menu.length; i++){
                    let eachPrice = menu[i]
                    total += eachPrice.price
            }
            return total
        }
        cheapestItem(){
            let prices = []
            for(let i = 0; i < this.menu.length; i++){
                let menuItemPrice = this.menu[i].price
                prices.push(menuItemPrice)
            }
            // console.log(prices)
            let cheapest = 0
            for(let i = 0; i < prices.length; i){
                let currentItem = prices[i]
                console.log(currentItem)
                let nextItem = prices[i]
                // console.log(nextItem)
                if(currentItem < nextItem){
                    cheapest = currentItem
                } else{
                    cheapest = currentItem
                    currentItem = nextItem
                }
            }
            return cheapest
        }
}
const menu = [
    {
        item: "hot cocoa",
        type: "drink",
        price: 2.5,
    },
    {
        item: "ice cream",
        type: "food",
        price: 1,
    },
    {
        item: "tea",
        type: "drink",
        price: 3
    }
]
const cafe = new CoffeeShop("Novel", menu)
console.log(cafe.addOrder(["hot cocoa", "ice cream", "tea"]))
console.log(cafe.listOrders())
console.log(cafe.dueAmount())
console.log(cafe.cheapestItem())