"use strict";
class LightButton {
    constructor() {
        this.theme = "Light";
    }
    click() {
        return `Clicks ${this.theme} Button`;
    }
}
class DarkButton {
    constructor() {
        this.theme = "Dark";
    }
    click() {
        return `Clicks ${this.theme} Button`;
    }
}
class LightInput {
    constructor() {
        this.theme = "Light";
    }
    write() {
        return `Writes in this ${this.theme} Input`;
    }
}
class DarkInput {
    constructor() {
        this.theme = "Dark";
    }
    write() {
        return `Writes in this ${this.theme} Input`;
    }
}
class LightCheckBox {
    constructor() {
        this.theme = "Light";
    }
    checks() {
        return `Checks the ${this.theme} CheckBox`;
    }
}
class DarkCheckBox {
    constructor() {
        this.theme = "Dark";
    }
    checks() {
        return `Checks the ${this.theme} CheckBox`;
    }
}
class Theme {
}
class LightThemeComponents extends Theme {
    createButton() {
        return new LightButton();
    }
    createInput() {
        return new LightInput();
    }
    createCheckBox() {
        return new LightCheckBox();
    }
}
class DarkThemeComponents extends Theme {
    createButton() {
        return new DarkButton();
    }
    createInput() {
        return new DarkInput();
    }
    createCheckBox() {
        return new DarkCheckBox();
    }
}
const lightTheme = new LightThemeComponents();
const darkTheme = new DarkThemeComponents();
const Lightbtn = lightTheme.createButton();
const Darkbtn = darkTheme.createButton();
console.log(Lightbtn);
console.log(Darkbtn);
