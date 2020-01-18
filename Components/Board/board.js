import React from "react";
import Block from "../Block/block";

export default class Board extends React.Component {
    Block(i) {
      return (
        <Block
          value={this.props.blocks[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }

    render() {
        return (
          <div className="board">
            <div className="board-row">
                {this.SetUp(0)}{this.SetUp(1)}{this.SetUp(2)}
            </div>
            <div className="board-row">
                {this.SetUp(3)}{this.SetUp(4)}{this.SetUp(5)}
            </div>
            <div className="board-row">
                {this.SetUp(6)}{this.SetUp(7)}{this.SetUp(8)}
            </div>
          </div>
        );
      }

}