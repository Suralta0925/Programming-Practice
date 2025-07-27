import { TrafficLights } from "./TrafficLight";
export interface State{
    name: string;
    handle(): void;
    next(trafficLights: TrafficLights): void;
}

export class redState implements State{
    name = "Red";

    handle(): void{
        console.log(this.name)
    }
    next(trafficLights: TrafficLights): void {
        trafficLights.setState(new greenState())
    }
}

class greenState implements State{
    name = "Green"


    handle(): void {
        console.log(this.name);
    }
    next(trafficLights: TrafficLights): void {
        trafficLights.setState(new yellowState());
    }
}

class yellowState implements State{
    name = "Yellow"
    handle(): void {
        console.log(this.name);
    }
    next(trafficLights: TrafficLights): void {
        trafficLights.setState(new redState())
    }
    
}

