"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
class shapeFactory {
    createShape(shape) {
        return shape;
    }
}
const factory = new shapeFactory();
let Square = factory.createShape(new Shape_1.square);
Square.draw();
