
class Singleton{

    private static instance : Singleton;
    private data: string;

    private constructor(data : string){
        this.data = data;
    }

    public static getInstance(data : string) : Singleton{ 

        if (!this.instance){
            this.instance = new Singleton(data);
        }
        else{
            console.error(`${this.name} is already initialized`);
        }
        return this.instance;
    }
    public getData() : string{
        return this.data; 
    }

}

const singleton : Singleton = Singleton.getInstance("Singleton Initialized");
console.log(singleton.getData());
const single : Singleton = Singleton.getInstance("I error")
console.log(single.getData());