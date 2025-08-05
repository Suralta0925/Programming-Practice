"use strict";
class Singleton {
    constructor(data) {
        this.data = data;
    }
    static getInstance(data) {
        if (!this.instance) {
            this.instance = new Singleton(data);
        }
        else {
            console.error(`${this.name} is already initialized`);
        }
        return this.instance;
    }
    getData() {
        return this.data;
    }
}
const singleton = Singleton.getInstance("Singleton Initialized");
console.log(singleton.getData());
const single = Singleton.getInstance("I error");
console.log(single.getData());
