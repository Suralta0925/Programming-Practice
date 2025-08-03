interface Button{
    theme: string;
    click() : string;
}

interface Input{
    theme: string;
    write() : string;
}

interface CheckBox{
    theme : string;
    checks() : string;
}

class LightButton implements Button{
    theme = "Light";

    click(): string{
        return `Clicks ${this.theme} Button`;
    }
}

class DarkButton implements Button{
    theme = "Dark";

    click(){
        return `Clicks ${this.theme} Button`;
    }
}

class LightInput implements Input{
    theme = "Light";

    write(): string {
        return `Writes in this ${this.theme} Input`
    }
}

class DarkInput implements Input{
    theme = "Dark";

    write(): string {
        return `Writes in this ${this.theme} Input`
    }
}

class LightCheckBox implements CheckBox{
    theme = "Light";

    checks(): string {
        return `Checks the ${this.theme} CheckBox`
    }
}

class DarkCheckBox implements CheckBox{
    theme = "Dark";

    checks(): string {
        return `Checks the ${this.theme} CheckBox`
    }
}

abstract class Theme{

    abstract createButton(): Button;
    abstract createInput(): Input;
    abstract createCheckBox(): CheckBox;
}

class LightThemeComponents extends Theme{
    createButton(): Button {
        return new LightButton();
    }
    createInput(): Input {
        return new LightInput();
    }
    createCheckBox(): CheckBox {
        return new LightCheckBox();
    } 
}

class DarkThemeComponents extends Theme{
    createButton(): Button {
        return new DarkButton();
    }
    createInput(): Input {
        return new DarkInput();
    }
    createCheckBox(): CheckBox {
        return new DarkCheckBox();
    }
}

const lightTheme : Theme = new LightThemeComponents();
const darkTheme : Theme = new DarkThemeComponents();
const Lightbtn : Button = lightTheme.createButton();
const Darkbtn : Button = darkTheme.createButton();
console.log(Lightbtn);
console.log(Darkbtn);
