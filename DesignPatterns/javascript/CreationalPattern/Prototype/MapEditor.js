"use strict";
class tile {
    constructor(color, height, type) {
        this.color = color;
        this.height = height;
        this.type = type;
    }
    toString() {
        return `color: ${this.color}\nheight: ${this.height}\ntype: ${this.type}`;
    }
}
class grass extends tile {
    constructor(color, height, type) {
        super(color, height, type);
    }
    copy() {
        return this;
    }
}
const springGrass = new grass("green", 10, "spring");
const cloneGrass = springGrass.copy();
const diffGrass = [springGrass, cloneGrass];
for (let diff of diffGrass) {
    console.log(diff.toString());
}
