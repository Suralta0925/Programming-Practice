export class redState {
    constructor() {
        this.name = "Red";
    }
    handle() {
        console.log(this.name);
    }
    next(trafficLights) {
        trafficLights.setState(new greenState());
    }
}
class greenState {
    constructor() {
        this.name = "Green";
    }
    handle() {
        console.log(this.name);
    }
    next(trafficLights) {
        trafficLights.setState(new yellowState());
    }
}
class yellowState {
    constructor() {
        this.name = "Yellow";
    }
    handle() {
        console.log(this.name);
    }
    next(trafficLights) {
        trafficLights.setState(new redState());
    }
}
