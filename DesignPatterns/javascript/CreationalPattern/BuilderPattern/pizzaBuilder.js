"use strict";
class Pizza {
    constructor(addCheese, addMeatBalls, addPineapple, addPeperoni, addOnions) {
        this.addCheese = addCheese;
        this.addMeatBalls = addMeatBalls;
        this.addPineapple = addPineapple;
        this.addPeperoni = addPeperoni;
        this.addOnions = addOnions;
    }
}
class PizzaBuilder {
    AddCheese(addCheese) {
        this.addCheese = addCheese;
        return this;
    }
    AddMeatBalls(addMeatBalls) {
        this.addMeatBalls = addMeatBalls;
        return this;
    }
    AddPineapple(addPineapple) {
        this.addPineapple = addPineapple;
        return this;
    }
    AddPeperoni(addPeperoni) {
        this.addPeperoni = addPeperoni;
        return this;
    }
    AddOnions(addOnions) {
        this.addOnions = addOnions;
        return this;
    }
    build() {
        return new Pizza(this.addCheese, this.addMeatBalls, this.addPineapple, this.addPeperoni, this.addOnions);
    }
}
const pizza = new PizzaBuilder();
pizza.AddCheese("Chedar Cheese")
    .AddMeatBalls("Wagyu MeatBalls")
    .AddOnions("Onions");
console.log(pizza.build());
