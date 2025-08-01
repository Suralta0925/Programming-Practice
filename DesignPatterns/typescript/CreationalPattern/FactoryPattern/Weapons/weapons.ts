interface weapon{
    use(): string;
}

class Sword implements weapon{
    use(){
        return "Woosh! Swinging Sword";
    }
}

class Gun implements weapon{
    use(){
        return "Bangg! Wielding Gun";
    }
}

class Bow implements weapon{
    use(){
        return "Twangg! Shoots an Arrow"
    }
}

class weaponFactory{
    createWeapon(Weapon : string):weapon{
        switch(Weapon.toLowerCase()){
            case "sword":
                return new Sword();
            case "bow":
                return new Bow();
            case "gun":
                return new Gun();
            default:
                throw new Error("Invalid Weapon Type");

        }
    }
}

const weaponMaker : weaponFactory = new weaponFactory();
const sword : weapon = weaponMaker.createWeapon("gun");
console.log(sword.use());