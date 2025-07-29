class Size{
    height: number;
    width: number;

    constructor(width: number,height: number){
        this.width = width;
        this.height = height;
    }

    setSize(width: number, height : number){
        this.height = height;
        this.width = width;
    }

    getSize(){
        return [this.width, this.height];
    }

}

interface Shape{
    size : Size;
    
}

