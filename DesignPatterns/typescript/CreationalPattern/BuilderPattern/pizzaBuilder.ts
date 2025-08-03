class Pizza{
    private addCheese? : string;
    private addMeatBalls? : string;
    private addPineapple? : string;
    private addPeperoni? : string;
    private addOnions? : string;

    constructor(addCheese? : string,addMeatBalls? : string,
        addPineapple? : string,addPeperoni? : string,addOnions? : string
    ){
        this.addCheese = addCheese;
        this.addMeatBalls = addMeatBalls;
        this.addPineapple = addPineapple;
        this.addPeperoni = addPeperoni;
        this.addOnions = addOnions;
    }
}

class PizzaBuilder{
    private addCheese? : string;
    private addMeatBalls? : string;
    private addPineapple? : string;
    private addPeperoni? : string;
    private addOnions? : string;

    public AddCheese(addCheese : string) : PizzaBuilder{
        this.addCheese = addCheese;
        return this;
    }

    public AddMeatBalls(addMeatBalls : string) : PizzaBuilder{
        this.addMeatBalls = addMeatBalls;
        return this;
    }

    public AddPineapple(addPineapple : string) : PizzaBuilder{
        this.addPineapple = addPineapple;
        return this;
    }

    public AddPeperoni(addPeperoni : string) : PizzaBuilder{
        this.addPeperoni = addPeperoni;
        return this;
    }

    public AddOnions(addOnions : string) : PizzaBuilder{
        this.addOnions = addOnions;
        return this;
    }

    public build(): Pizza{
        return new Pizza(this.addCheese,this.addMeatBalls,this.addPineapple,this.addPeperoni,this.addOnions)
    }
}

const pizza : PizzaBuilder = new PizzaBuilder();
pizza.AddCheese("Chedar Cheese")
     .AddMeatBalls("Wagyu MeatBalls")
     .AddOnions("Onions");
console.log(pizza.build());
