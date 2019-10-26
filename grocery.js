var Grocery = /** @class */ (function () {
    function Grocery(groceryList, qty, price) {
        this.groceryList = groceryList;
        this.qty = qty;
        this.price = price;
        this.groceryList = groceryList;
        this.qty = qty;
        this.price = price;
    }
    return Grocery;
}());
function grocery(groceries) {
    return groceries.groceryList + "   " + groceries.qty + "   " + groceries.price;
}
var items1 = new Grocery(['milk', '\nbread', '\neggs', '\nbroccoli', '\nchicken\n'], [2, 1, 1, 3, 5], [2.79, 1.59, 3.99, .99, 10.79]);
document.body.textContent = grocery(items1);
