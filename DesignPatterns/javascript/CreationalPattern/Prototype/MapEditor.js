"use strict";
class grass {
    constructor(color, height, type) {
        this.color = color;
        this.height = height;
        this.type = type;
    }
    copy() {
        return new grass(this.color, this.height, this.type);
    }
    toString() {
        return `color: ${this.color}\nheight: ${this.height}\ntype: ${this.type}`;
    }
}
const springGrass = new grass("green", 10, "spring");
console.log(springGrass.toString());
const cloneGrass = springGrass.copy();
console.log(cloneGrass.toString());
