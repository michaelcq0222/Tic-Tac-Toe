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


    
}