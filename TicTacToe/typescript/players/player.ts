// import { PlayerState, player} from "./playerState.js";
// export class Player{
//     playerState: PlayerState;

//     constructor(playerState: PlayerState){
//         this.playerState = playerState;
//     }

//     setState(playerState: PlayerState){
//         this.playerState = playerState;
//     }
//     getState(){
//         return this.playerState;
//     }
//     run(){
//         this.playerState.move();
//         this.playerState.nextTurn(this);
//     }
// }


// const btn = document.querySelectorAll<HTMLButtonElement>(".play");
// const currentPlayer = new Player(new player());
// btn.forEach((button) => {
//     button.addEventListener("click", () => {
//     currentPlayer.getState().nextTurn(currentPlayer);
//     setTimeout(() => currentPlayer.run(), 1000);
//     });
// });

// currentPlayer.run();


class GameState {
      currentPlayer: 'X' | 'O' = 'X';
      board: (null | 'X' | 'O')[] = Array(9).fill(null);
      isGameOver = false;

      move(index: number): void {
        if (this.board[index] || this.isGameOver) return;
            this.board[index] = this.currentPlayer;
            this.updateUI();
        if (this.checkWinner()) {
            this.isGameOver = true;
            this.setStatus(`${this.currentPlayer} wins!`);
        }
        else if (this.board.every(cell => cell)) {
            this.isGameOver = true;
            this.setStatus('Draw!');
        }
        else {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.setStatus(`Current Turn: ${this.currentPlayer}`);
        }
      }

      updateUI(): void {
        const boardEl = document.getElementById('board')!;
        boardEl.innerHTML = '';
        this.board.forEach((value, idx) => {
          const cell = document.createElement('div');
          cell.className = 'cell';
          cell.textContent = value || '';
          cell.addEventListener('click', () => this.move(idx));
          boardEl.appendChild(cell);
        });
      }

      checkWinner(): boolean {
        const winCombos = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8],
          [0, 3, 6], [1, 4, 7], [2, 5, 8],
          [0, 4, 8], [2, 4, 6]
        ];
        return winCombos.some(combo => {
          const [a, b, c] = combo;
          return (
            this.board[a] &&
            this.board[a] === this.board[b] &&
            this.board[a] === this.board[c]
          );
        });
      }

      setStatus(message: string): void {
        const status = document.getElementById('status')!;
        status.textContent = message;
      }
    }

    const game = new GameState();
    game.updateUI();
    game.setStatus('Current Turn: X');