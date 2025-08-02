"use strict";
class zombie {
    constructor() {
        this.attackType = "Scratch";
        this.defense = 50;
        this.baseHp = 100;
        this.power = 5;
    }
    maxHp() {
        return (this.defense / 100) * this.baseHp;
    }
    attack() {
        return this.power;
    }
    damageTaken(damage) {
        this.baseHp -= damage;
    }
}
class vampire {
    constructor() {
        this.attackType = "Blood Spike";
        this.defense = 40;
        this.baseHp = 100;
        this.power = 75;
    }
    maxHp() {
        return (this.defense / 100) * this.baseHp;
    }
    attack() {
        return this.power;
    }
    damageTaken(damage) {
        this.baseHp -= damage;
    }
}
class robot {
    constructor() {
        this.attackType = "Laser Beam";
        this.defense = 100;
        this.baseHp = 100;
        this.power = 100;
    }
    maxHp() {
        return (this.defense / 100) * this.baseHp;
    }
    attack() {
        return this.power;
    }
    damageTaken(damage) {
        this.baseHp -= damage;
    }
}
class enemyFactory {
    createEnemy(Enemy) {
        switch (Enemy.toLowerCase()) {
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
const factory = new enemyFactory();
const Robot = factory.createEnemy("robot");
const Zombie = factory.createEnemy("zombie");
let isRobotTurn = true;
const battleInterval = setInterval(() => {
    console.log(`Robot Hp: ${Robot.maxHp()}`);
    console.log(`Zombie Hp: ${Zombie.maxHp()}\n`);
    if (isRobotTurn) {
        Zombie.damageTaken(Robot.attack());
        console.log(`Robot used ${Robot.attackType}, Zombie lose ${Robot.power} HP\n\n`);
        if (Robot.maxHp() <= 0) {
            console.log(`Robot Hp: ${Robot.maxHp()}`);
            console.log(`Zombie Hp: ${Zombie.maxHp()}\n`);
            console.log("Zombie Wins");
            clearInterval(battleInterval);
            return;
        }
    }
    else {
        Robot.damageTaken(Zombie.attack());
        console.log(`Zombie used ${Zombie.attackType}, Robot lose ${Zombie.power} HP\n\n`);
        if (Zombie.maxHp() <= 0) {
            console.log(`Robot Hp: ${Robot.maxHp()}`);
            console.log(`Zombie Hp: ${Zombie.maxHp()}\n`);
            console.log("Robot Wins");
            clearInterval(battleInterval);
            return;
        }
    }
    isRobotTurn = !isRobotTurn;
}, 2000);
