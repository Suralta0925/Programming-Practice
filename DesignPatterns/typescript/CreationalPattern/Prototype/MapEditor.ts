interface prototype{
    copy() : prototype;
}


class grass implements prototype{
    private color : string;
    private height : number;
    private type : string;

    constructor(color:string, height : number, type : string){
        this.color = color;
        this.height = height;
        this.type = type;
    }

    copy(){
        return new grass(this.color,this.height,this.type);
    }

    toString(): string{
        return `color: ${this.color}\nheight: ${this.height}\ntype: ${this.type}`;
    }
}

const springGrass : grass = new grass("green",10,"spring");
console.log(springGrass.toString());
const cloneGrass : grass = springGrass.copy();
console.log(cloneGrass.toString());