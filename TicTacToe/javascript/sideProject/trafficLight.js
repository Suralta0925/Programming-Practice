import { redState } from "./trafficLighState.js";
export class TrafficLights {
    constructor(inititalState) {
        this.state = inititalState;
    }
    setState(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
    run() {
        this.state.handle();
        this.state.next(this);
    }
}
const trafficLights = new TrafficLights(new redState());
let count = 0;
const maxCycles = 100;
const btn = document.getElementById("btn");


function runCycles() {
    if (count >= maxCycles)
        return;
    trafficLights.run();
    count++;
    setTimeout(runCycles, 1000);
}
runCycles();