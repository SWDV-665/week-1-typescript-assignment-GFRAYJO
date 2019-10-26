class Grocery
{
    constructor(public groceryList: Array<string>, public qty: Array<number>, public price: Array<number>)
    {
       this.groceryList = groceryList 
       this.qty = qty
       this.price = price
    }
}

interface Groceries{
    groceryList: Array<string>;
    qty: Array<number>;
    price: Array<number>;
}

function grocery(groceries: Groceries)
{ 
    return groceries.groceryList + "   " + groceries.qty + "   " + groceries.price;
}

let items1 = new Grocery(['milk','\nbread','\neggs','\nbroccoli','\nchicken\n'], 
[ 2 , 1 , 1 , 3 , 5 ], 
[ 2.79 , 1.59 , 3.99 , .99 , 10.79 ])

document.body.textContent = grocery(items1);

