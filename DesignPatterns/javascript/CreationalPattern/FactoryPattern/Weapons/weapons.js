"use strict";
// interface weapon{
//     use(): string;
//     clone() : weapon;
// }
// class Sword implements weapon{
//     use(){
//         return "Woosh! Swinging Sword";
//     }
//     clone(){
//         return new Sword();
//     }
// }
// class Gun implements weapon{
//     use(){
//         return "Bangg! Wielding Gun";
//     }
//     clone(){
//         return new Gun();
//     }
// }
// class Bow implements weapon{
//     use(){
//         return "Twangg! Shoots an Arrow"
//     }
//     clone(){
//         return new Bow();
//     }
// }
// class weaponFactory{
//     createWeapon(Weapon : string):weapon{
//         switch(Weapon.toLowerCase()){
//             case "sword":
//                 return new Sword();
//             case "bow":
//                 return new Bow();
//             case "gun":
//                 return new Gun();
//             default:
//                 throw new Error("Invalid Weapon Type");
//         }
//     }
// }
// const weaponMaker : weaponFactory = new weaponFactory();
// const gun : weapon = weaponMaker.createWeapon("gun");
// const gun2 : weapon = gun.clone();
// console.log(gun.use());
// console.log(gun2.use());
