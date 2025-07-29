"use strict";
class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setSize(width, height) {
        this.height = height;
        this.width = width;
    }
    getSize() {
        return [this.width, this.height];
    }
}
