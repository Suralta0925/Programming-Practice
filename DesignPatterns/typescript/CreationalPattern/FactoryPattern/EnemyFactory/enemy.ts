interface enemy{
    attackType: string;
    defense : number;
    baseHp : number;
    maxHp(): number;
    power : number;
    attack():number;
    damageTaken(damage : number) : void;
}

class zombie implements enemy{
    attackType: string = "Scratch";
    defense: number = 50;
    baseHp : number = 100;

    maxHp(): number{
        return (this.defense/100) * this.baseHp;
    } 

    power : number = 5;

    attack(): number {
        return this.power;
    }

    damageTaken(damage: number): void {
        this.baseHp -= damage;
    }
}

class vampire implements enemy{
    attackType: string = "Blood Spike";
    defense: number = 40;
    baseHp: number = 100;
    power: number = 75;

    maxHp(): number{
        return (this.defense/100) * this.baseHp;
    } 

    attack(): number {
        return this.power;
    }

    damageTaken(damage: number): void {
        this.baseHp -= damage;
    }
}

class robot implements enemy{
    attackType: string = "Laser Beam";
    defense: number = 100;
    baseHp: number = 100;
    power: number = 100;

    maxHp(): number{
        return (this.defense/100) * this.baseHp;
    } 

    attack(): number {
        return this.power;
    }

    damageTaken(damage: number): void {
        this.baseHp -= damage;
    }
}


class enemyFactory{

    createEnemy(Enemy: string) : enemy{
        switch (Enemy.toLowerCase()){
            case "zombie":
                return new zombie();
            case "vampire":
                return new vampire();
            case "robot":
                return new robot();
            default:
                throw new Error("Enemy doesn't exist");
        }
    }
}

const factory : enemyFactory = new enemyFactory();
const Robot : enemy = factory.createEnemy("robot");
const Zombie : enemy = factory.createEnemy("zombie");


let isRobotTurn : boolean = true;

const battleInterval = setInterval(() =>{
    console.log(`Robot Hp: ${Robot.maxHp()}`);
    console.log(`Zombie Hp: ${Zombie.maxHp()}\n`)
    if (isRobotTurn){

        Zombie.damageTaken(Robot.attack());
        console.log(`Robot used ${Robot.attackType}, Zombie lose ${Robot.power} HP\n\n`);
        if (Robot.maxHp() <= 0){
            console.log(`Robot Hp: ${Robot.maxHp()}`);
            console.log(`Zombie Hp: ${Zombie.maxHp()}\n`)
            console.log("Zombie Wins");
            
            clearInterval(battleInterval);
            return;
        }
    }
    else{
        Robot.damageTaken(Zombie.attack());
        console.log(`Zombie used ${Zombie.attackType}, Robot lose ${Zombie.power} HP\n\n`);

        if (Zombie.maxHp() <= 0){
            console.log(`Robot Hp: ${Robot.maxHp()}`);
            console.log(`Zombie Hp: ${Zombie.maxHp()}\n`)
            console.log("Robot Wins");
            clearInterval(battleInterval);
            return;
        }
    }

    isRobotTurn = !isRobotTurn;
},2000)
