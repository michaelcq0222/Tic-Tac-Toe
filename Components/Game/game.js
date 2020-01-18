import React from "react";
import Board from "../Board/board";

export default class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            blocks: Array(9).fill(null)
          }
        ],
        step: 0,
        X: true
      };
    }

    render() {
        let status;
        if (winner) {
        status = "Winner: " + winner;
        } else {
        if (this.state.step === 9) {
            status = "It's a Tie!";
        } else {
            status = "Next Move: " + (this.state.X ? "X" : "O");
        }
        }
        return (
            <div className="game">
              <div className="game-board">
                <Board
                  blocks={this.state.history[this.state.step].blocks}
                  onClick={i => this.handleClick(i)}
                />
              </div>
              <div className="game-status">
                <div>{status}</div>
                <button className="undo" onClick={() => this.reset()}>New Game</button>
                <button className = "reset" onClick={() => this.undo()}>Undo</button>
              </div>
            </div>
          );
        }

}