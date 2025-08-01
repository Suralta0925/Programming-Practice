import {Shape,circle,triangle,square} from './Shape'

class shapeFactory{
    createShape(shape : Shape) : Shape{
        return shape;
    }
}

const factory: shapeFactory = new shapeFactory();
let Square = factory.createShape(new square);
Square.draw()