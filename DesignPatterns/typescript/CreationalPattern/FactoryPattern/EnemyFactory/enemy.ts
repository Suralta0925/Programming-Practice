interface enemy{
    attackType: string;
    defense : number;
    baseHp : number;
    getCurrentHp(): number;
    power : number;
    attack():number;
    damageTaken(damage : number) : void;
    getEnemyType() : string;
}

class zombie implements enemy{
    attackType: string = "Scratch";
    defense: number = 50;
    baseHp : number = 100;

    getCurrentHp(): number{
        return (this.defense/100) * this.baseHp;
    } 

    power : number = 5;

    attack(): number {
        return this.power;
    }

    damageTaken(damage: number): void {
        this.baseHp -= damage;
    }

    getEnemyType(): string {
        return "Zombie"
    }
}

class vampire implements enemy{
    attackType: string = "Blood Spike";
    defense: number = 40;
    baseHp: number = 100;
    power: number = 75;

    getCurrentHp(): number{
        return (this.defense/100) * this.baseHp;
    } 

    attack(): number {
        return this.power;
    }

    damageTaken(damage: number): void {
        this.baseHp -= damage;
    }
    getEnemyType(): string {
        return "Vampire"
    }
}

class robot implements enemy{
    attackType: string = "Laser Beam";
    defense: number = 100;
    baseHp: number = 100;
    power: number = 100;

    getCurrentHp(): number{
        return (this.defense/100) * this.baseHp;
    } 

    attack(): number {
        return this.power;
    }

    damageTaken(damage: number): void {
        this.baseHp -= damage;
    }

    getEnemyType(): string {
        return "Robot"
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
class initiateBattle{
    startBattle(enemy1 : enemy, enemy2: enemy) : void{
        let isEnemy1Turn : boolean = true;

    const battleInterval = setInterval(() =>{
    console.log(`${enemy1.getEnemyType()} Hp: ${enemy1.getCurrentHp()}`);
    console.log(`${enemy2} Hp: ${enemy2.getCurrentHp()}\n`)
    if (isEnemy1Turn){

        enemy1.damageTaken(enemy1.attack());
        console.log(`${enemy1} used ${enemy1.attackType}, ${enemy2} lose ${enemy1.power} HP\n\n`);
        if (enemy1.getCurrentHp() <= 0){
            console.log(`${enemy1.getEnemyType()} Hp: ${enemy1.getCurrentHp()}`);
            console.log(`${enemy2} Hp: ${enemy2.getCurrentHp()}\n`)
            console.log(`${enemy2} Wins`);
            
            clearInterval(battleInterval);
            return;
        }
    }
    else{
        enemy1.damageTaken(enemy2.attack());
        console.log(`${enemy2} used ${enemy2.attackType}, ${enemy1} lose ${enemy2.power} HP\n\n`);

        if (enemy2.getCurrentHp() <= 0){
            console.log(`${enemy1} Hp: ${enemy1.getCurrentHp()}`);
            console.log(`${enemy2} Hp: ${enemy2.getCurrentHp()}\n`)
            console.log(`${enemy1} Wins`);
            clearInterval(battleInterval);
            return;
        }
    }

    isEnemy1Turn = !isEnemy1Turn;
    },2000)
    }
}

const battle = new initiateBattle();
const factory : enemyFactory = new enemyFactory();
const Robot : enemy = factory.createEnemy("robot");
const Zombie : enemy = factory.createEnemy("zombie");
const Vampire : enemy = factory.createEnemy("vampire");

battle.startBattle(Vampire,Zombie);
