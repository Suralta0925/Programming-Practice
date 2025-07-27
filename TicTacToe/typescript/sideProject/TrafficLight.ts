import { State,redState} from "./TrafficLighState";
export class TrafficLights{
    private state: State;

    public constructor(inititalState: State){
        this.state = inititalState;
    }

    setState(state: State){
        this.state = state;
    }

    getState(){
        return this.state;
    }

    run(){
        this.state.handle()
        this.state.next(this);
    }
}
const trafficLights = new TrafficLights(new redState());
let count = 0;
const maxCycles = 6;

function runCycles(){
    if (count >= maxCycles) return;
    trafficLights.run();
    count++;
    setTimeout(runCycles, 1000);
}

runCycles();