import React from "react";
import Board from "../Board/board";

export default class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{blocks: Array(9).fill(null)}],
        step: 0,
        X: 1,
        select: 1
      };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.step + 1);
        const blocks = history[history.length - 1].blocks.slice();
        if (this.win(blocks) || blocks[i]) {
          return;
        }
        blocks[i] = this.state.X ? "X" : "O";
        this.setState({
          history: [...history,{blocks: blocks}],
          step: history.length,
          X: !this.state.X
        });
      }

      win(b) {
        const l = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < l.length; i++) {
          const [x, y, z] = l[i];
          if (b[x] && b[x] === b[y] && b[x] === b[z]) {
            return b[x];
          }
        }
        return null;
      }

      reset() {
        this.setState({
          step: 0,
          X: this.state.select
        });
      }

      undo() {
        if (this.state.step <= 0) {
          alert("Can't Undo");
        } else {
          this.setState({
            step: this.state.step - 1,
            X: !this.state.X
          });
        }
      }

      selectChange = e => {
        let move = [1, 0];
        let ind = e.target.value;
        if (this.state.step === 0) {
          this.setState({
            select: !this.state.select,
            X: move[ind]
          });
        } else {
          alert("Can't Make Selection in Game!!!");
          this.setState({
            select: move[ind],
          });
        }
      };


    render() {
        let status;
        const winner = this.win(this.state.history[this.state.step].blocks);
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
                <select className="select" onChange={this.selectChange}>
                <option value="0">X</option>
                <option value="1">O</option>
                </select>
              <div className="game-board">
                <Board
                  blocks={this.state.history[this.state.step].blocks}
                  onClick={i => this.handleClick(i)}
                />
              </div>
              <div className="game-status">
                <div>{status}</div>
                <button className = "reset" onClick={() => this.undo()}>Undo</button>
                <button className="undo" onClick={() => this.reset()}>New Game</button>
              </div>
            </div>
          );
        }

}