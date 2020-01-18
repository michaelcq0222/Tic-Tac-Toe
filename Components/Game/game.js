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
      };
    }

}