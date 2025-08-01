
export interface Shape{
    draw() : void;
}

export class circle implements Shape{
    draw(){
        console.log("Drawing Circle: O");
    }
}

export class triangle implements Shape{
    draw(){
        console.log("Drawing triangle: △")
    }
}

export class square implements Shape{
    draw(){
        console.log("Drawing square: □")
    }
}