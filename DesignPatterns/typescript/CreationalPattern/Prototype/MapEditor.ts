abstract class tile{
    private color : string;
    private height : number;
    private type : string;

    constructor(color:string, height : number, type : string){
        this.color = color;
        this.height = height;
        this.type = type;
    }
    
    abstract copy() : tile;
    toString(): string{
        return `color: ${this.color}\nheight: ${this.height}\ntype: ${this.type}`;
    }
}


class grass extends tile{

    constructor(color:string, height : number, type : string){
        super(color,height,type);
    }

    copy(){
        return  this;
    }
}



const springGrass : grass = new grass("green",10,"spring");
const cloneGrass : grass = springGrass.copy();

const diffGrass : Array<tile> = [springGrass,cloneGrass];

for (let diff of diffGrass){
    console.log(diff.toString());
}