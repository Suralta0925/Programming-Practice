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
    createWeapon(Weapon : weapon):weapon{
        return Weapon;
    }
}

const weaponMaker : weaponFactory = new weaponFactory();
const sword : weapon = weaponMaker.createWeapon(new Sword());
console.log(sword.use());