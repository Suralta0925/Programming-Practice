"use strict";
class Singleton {
    constructor(data) {
        this.data = data;
    }
    static getInstance(data) {
        let result = this.instance;
        console.log(result);
        if (result == null || result == undefined) {
            result = new Singleton(data);
        }
        else {
            console.error(`${this.name} is already initialized`);
        }
        return result;
    }
}
const singleton = Singleton.getInstance("Singleton Initialized");
console.log(singleton);
const single = Singleton.getInstance("I error");
console.log(single);
