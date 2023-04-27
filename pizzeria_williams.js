/* 
    Pizza Oven

        * Create a function called pizzaOven. 

        --We should feel free to customize what information we keep track of for our pizza, 
        but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.--

    * Create a function called pizzaOven that returns a JavaScript (Pizza) Object

    * Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]

    * Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

*/

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

var crustTypes = [
    "deep dish",
    "hand tossed",
    "Sicilian",
    "New York-style",
    "Detroit-style",
    "Neapolitan",
    "St.Louis-style",
    "California-style",
    "stuffed crust",
    "New Haven-style",
    "Greek",
    "flatbread dough",
    "sourdough",
    "brick oven style",
    "thick crust",
    "thin crust",
    "parmesan crust",
    "gluten free"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "spicy red sauce",
    "bbq sauce",
    "buffalo sauce",
    "alfredo sauce",
    "pesto",
    "olive oil",
];

var cheeses = [
    "mozzarella",
    "parmigiano reggiano",
    "cheddar",
    "gouda",
    "feta",
    "goat cheese",
    "blue cheese",
    "parmesan",
    "ricotta",
    "cream cheese",
    "brie",
    "gorganzola",
    "muenster",
    "havarti",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "onions",
    "mushrooms",
    "bacon",
    "extra cheese",
    "bell pepper",
    "sausage",
    "pineapple",
    "spinach",
    "olives",
    "ham",
    "roma tomatoes",
    "sundried tomatoes",
    "chicken",
    "artichokes",
    "beef",
    "anchovies",
    "garlic",
    "jalepenos",
    "broccoli",
    "basil",
    "meatballs"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(5, 0); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i=0; i<randomRange(10, 0); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());