// import { Player } from "./player";

// export interface PlayerState {
//     score: number;
//     move(): void;
//     nextTurn(player: Player): void;
// }

// export class player implements PlayerState {
//     score: number = 0;

//     move(): void {
//         window.alert("Player's turn to move!");
//     }

//     nextTurn(nextPlayer: Player): void {
//         nextPlayer.setState(new PlayerComputer());
//     }
// }

// export class PlayerComputer implements PlayerState {
    
//     score: number = 0;

//     move(): void {
//         window.alert("Computer's turn to move!");
//     }

//     nextTurn(nextPlayer: Player): void {
//         nextPlayer.setState(new player());
//     }
// }