"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let Inventory = [];
const prompt = (0, prompt_sync_1.default)();
var weaponType;
(function (weaponType) {
    weaponType[weaponType["SWORD"] = 0] = "SWORD";
    weaponType[weaponType["GUN"] = 1] = "GUN";
    weaponType[weaponType["BOW"] = 2] = "BOW";
})(weaponType || (weaponType = {}));
class Weapon {
    constructor(weaponName, material) {
        this.weaponName = weaponName;
        this.material = material;
    }
    getWeaponName() {
        return this.weaponName;
    }
    getMaterial() {
        return this.material;
    }
}
class Sword extends Weapon {
    constructor(weaponName, material) {
        super(weaponName, material);
    }
    use() {
        console.log("Woooosh! Swinging The Sword");
    }
    clone() {
        return new Sword(this.getWeaponName(), this.getMaterial());
    }
}
class Gun extends Weapon {
    constructor(weaponName, material) {
        super(weaponName, material);
    }
    use() {
        console.log("Banggg! Firing the Gun");
    }
    clone() {
        return new Gun(this.getWeaponName(), this.getMaterial());
    }
}
class Bow extends Weapon {
    constructor(weaponName, material) {
        super(weaponName, material);
    }
    use() {
        console.log("Twanggg! Firing the Bow");
    }
    clone() {
        const bow = new Bow(this.getWeaponName(), this.getMaterial());
        Inventory.push(bow);
        return bow;
    }
}
class WeaponFactory {
    createWeapon(Type, weaponName, material) {
        switch (Type) {
            case weaponType.SWORD:
                const sword = new Sword(weaponName, material);
                Inventory.push(sword);
                return sword;
            case weaponType.GUN:
                const gun = new Gun(weaponName, material);
                Inventory.push(gun);
                return gun;
            case weaponType.BOW:
                const bow = new Bow(weaponName, material);
                Inventory.push(bow);
                return bow;
        }
    }
}
class Display {
    main() {
        const display = [
            "== RPG Item Crafting ==",
            "1. Create Weapon",
            "2. Clone Weapon",
            "3. Upgrade Weapon",
            "4. View Inventory",
            "5. Switch Player",
            "6. Exit"
        ];
        display.forEach(e => {
            console.log(e);
        });
        const choice = prompt("Choose: ");
        console.log("\n\n\n");
        switch (Number(choice)) {
            case 1:
                this.createWeapon();
                break;
            case 4:
                this.showInventory();
        }
    }
    createWeapon() {
        const weapon = prompt("Choose Type: ");
        const weaponName = prompt(`Name of your ${weapon}: `);
        const material = prompt(`Choose Material: `);
        const weaponMaker = new WeaponFactory();
        switch (weapon.toLowerCase()) {
            case "sword":
                weaponMaker.createWeapon(weaponType.SWORD, weaponName, material);
                break;
            case "bow":
                weaponMaker.createWeapon(weaponType.BOW, weaponName, material);
                break;
            case "gun":
                weaponMaker.createWeapon(weaponType.GUN, weaponName, material);
        }
        console.log("\n\nDone Making the Weapon!!!\n\n");
        this.main();
    }
    showInventory() {
        if (Inventory.length > 0) {
            Inventory.forEach((e, index) => {
                console.log(`${index}. Name: ${e.getWeaponName()}\nMaterial: ${e.getMaterial()}\n\n`);
            });
        }
        else {
            console.log("Empty Inventory\n\n\n");
        }
        const sel = prompt("Select: ");
        if (sel === "0")
            this.main();
    }
}
class Client {
    constructor() {
        const display = new Display();
        display.main();
    }
}
const client = new Client();
