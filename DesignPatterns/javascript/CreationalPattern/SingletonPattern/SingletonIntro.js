"use strict";
class Singleton {
    constructor(data) {
        this.data = data;
    }
    getData() {
        return (!Singleton.instance) ? this.data : "";
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
}
const singleton = Singleton.getInstance("Singleton Initialized");
console.log(singleton.getData());
const single = Singleton.getInstance("I error");
console.log(single.getData());
