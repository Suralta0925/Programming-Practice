
class Singleton{

    private static instance : Singleton;
    private data: string;

    private constructor(data : string){
        this.data = data;
    }

    public static getInstance(data : string) : Singleton{ 
        let result : Singleton = this.instance;
        console.log(result);
        if (result == null || result == undefined){
            result = new Singleton(data);
        }
        else{
            console.error(`${this.name} is already initialized`);
        }
        return result;
    }

}

const singleton : Singleton = Singleton.getInstance("Singleton Initialized");
console.log(singleton);
const single : Singleton = Singleton.getInstance("I error")
console.log(single);