"use strict";
class zombie {
    constructor() {
        this.attackType = "Scratch";
        this.defense = 1000;
        this.baseHp = 100;
        this.maxHp = (this.defense / 100) * this.baseHp;
        this.power = 5;
    }
    getCurrentHp() {
        return (this.maxHp < 0) ? 0 : this.maxHp;
    }
    attack() {
        return this.power;
    }
    damageTaken(damage) {
        this.maxHp -= damage;
    }
    getEnemyType() {
        return "Zombie";
    }
}
class vampire {
    constructor() {
        this.attackType = "Blood Spike";
        this.defense = 40;
        this.baseHp = 100;
        this.maxHp = (this.defense / 100) * this.baseHp;
        this.power = 75;
    }
    getCurrentHp() {
        return (this.maxHp < 0) ? 0 : this.maxHp;
    }
    attack() {
        return this.power;
    }
    damageTaken(damage) {
        this.maxHp -= damage;
    }
    getEnemyType() {
        return "Vampire";
    }
}
class robot {
    constructor() {
        this.attackType = "Laser Beam";
        this.defense = 100;
        this.baseHp = 100;
        this.maxHp = (this.defense / 100) * this.baseHp;
        this.power = 100;
    }
    getCurrentHp() {
        return (this.maxHp < 0) ? 0 : this.maxHp;
    }
    attack() {
        return this.power;
    }
    damageTaken(damage) {
        this.maxHp -= damage;
    }
    getEnemyType() {
        return "Robot";
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
class initiateBattle {
    startBattle(enemy1, enemy2) {
        let isEnemy1Turn = true;
        const battleInterval = setInterval(() => {
            console.log(`${enemy1.getEnemyType()} Hp: ${enemy1.getCurrentHp()}`);
            console.log(`${enemy2.getEnemyType()} Hp: ${enemy2.getCurrentHp()}\n`);
            if (isEnemy1Turn) {
                enemy2.damageTaken(enemy1.attack());
                console.log(`${enemy1.getEnemyType()} used ${enemy1.attackType}, ${enemy2.getEnemyType()} lose ${enemy1.power} HP\n\n`);
                if (enemy1.getCurrentHp() <= 0) {
                    console.log(`${enemy1.getEnemyType()} Hp: ${enemy1.getCurrentHp()}`);
                    console.log(`${enemy2.getEnemyType()} Hp: ${enemy2.getCurrentHp()}\n`);
                    console.log(`${enemy2.getEnemyType()} Wins`);
                    clearInterval(battleInterval);
                    return;
                }
                else if (enemy2.getCurrentHp() <= 0) {
                    console.log(`${enemy1.getEnemyType()} Hp: ${enemy1.getCurrentHp()}`);
                    console.log(`${enemy2.getEnemyType()} Hp: ${enemy2.getCurrentHp()}\n`);
                    console.log(`${enemy1.getEnemyType()} Wins`);
                    clearInterval(battleInterval);
                    return;
                }
            }
            else {
                enemy1.damageTaken(enemy2.attack());
                console.log(`${enemy2.getEnemyType()} used ${enemy2.attackType}, ${enemy1.getEnemyType()} lose ${enemy2.power} HP\n\n`);
                if (enemy2.getCurrentHp() <= 0) {
                    console.log(`${enemy1.getEnemyType()} Hp: ${enemy1.getCurrentHp()}`);
                    console.log(`${enemy2.getEnemyType()} Hp: ${enemy2.getCurrentHp()}\n`);
                    console.log(`${enemy1.getEnemyType()} Wins`);
                    clearInterval(battleInterval);
                    return;
                }
                else if (enemy1.getCurrentHp() <= 0) {
                    console.log(`${enemy1.getEnemyType()} Hp: ${enemy1.getCurrentHp()}`);
                    console.log(`${enemy2.getEnemyType()} Hp: ${enemy2.getCurrentHp()}\n`);
                    console.log(`${enemy2.getEnemyType()} Wins`);
                    clearInterval(battleInterval);
                    return;
                }
            }
            isEnemy1Turn = !isEnemy1Turn;
        }, 2000);
    }
}
const battle = new initiateBattle();
const factory = new enemyFactory();
const Robot = factory.createEnemy("robot");
const Zombie = factory.createEnemy("zombie");
const Vampire = factory.createEnemy("vampire");
battle.startBattle(Vampire, Robot);
