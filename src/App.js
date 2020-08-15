import React, { Component } from "react";
import SnakeBody from "./SnakeBody";
import Food from "./Food";
import Score from "./Food";

class App extends Component {
  state = {
    gameOver: false,
    direction: "RIGHT",
    snakeSegments: [[48, 48], [48, 44], [48, 40]],
    nextSegment: null,
    foodCoords: null,
    segmentsToAdd: [],
    score: 0
  };

  componentDidMount() {
    setInterval(this.moveSnake, 200);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    if (this.state.foodCoords === null) {
      const foodCoords = this.generateRandomCoords();
      this.setState({
        foodCoords: foodCoords
      });
    }
    if (this.checkNotInBounds(this.state.snakeSegments[0])) {
      this.resetState();
    }
  }

  onKeyDown = e => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({ direction: "UP" });
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        break;
      case 37:
        this.setState({ direction: "LEFT" });
        break;
      case 39:
        this.setState({ direction: "RIGHT" });
        break;
    }
  };

  moveSnake = () => {
    const spacingUnit = 4;
    const direction = this.state.direction;
    const snake = this.state.snakeSegments.slice();
    const head = [...this.state.snakeSegments[0]];
    var newHead = head;
    var newSnake = [];
    switch (direction) {
      case "UP":
        newHead[1] = head[1] - spacingUnit;
        break;
      case "DOWN":
        newHead[1] = head[1] + spacingUnit;
        break;
      case "LEFT":
        newHead[0] = head[0] - spacingUnit;
        break;
      case "RIGHT":
        newHead[0] = head[0] + spacingUnit;
        break;
    }
    newSnake[0] = newHead;
    snake.forEach((segment, i) => {
      newSnake[i + 1] = segment;
    });
    newSnake.pop();
    this.setState({
      snakeSegments: newSnake
    });
    this.checkSnakeCollision();
    this.addSegmentIfNeeded();
  };

  checkNotInBounds = snakeCoords => {
    if (snakeCoords[0] > 96 || snakeCoords[0] < 0) {
      return true;
    } else if (snakeCoords[1] > 96 || snakeCoords[1] < 0) {
      return true;
    } else {
      return false;
    }
  };

  checkFoodEaten = () => {
    if (this.state.foodCoords === null) {
      return;
    } else if (
      this.state.snakeSegments[0][0] === this.state.foodCoords[0] &&
      this.state.snakeSegments[0][1] === this.state.foodCoords[1]
    ) {
      this.setState({
        foodCoords: null
      });
      return [this.state.snakeSegments[0][0], this.state.snakeSegments[0][1]];
    }
    return false;
  };

  addSegmentIfNeeded = () => {
    const segmentToAdd = this.checkFoodEaten();
    if (segmentToAdd) {
      this.state.segmentsToAdd.push(segmentToAdd);
      let matchFound = false;
      this.state.snakeSegments.forEach(segment => {
        if (segment[0] === segmentToAdd[0] && segment[1] === segmentToAdd[1]) {
          matchFound = true;
        }
      });
      if (matchFound) {
        const newSnake = [...this.state.snakeSegments];
        newSnake.push(segmentToAdd);
        this.setState({
          snakeSegments: newSnake
        });
      }
    }
  };

  generateRandomCoords = () => {
    const snakeBody = this.state.snakeSegments;
    const spacingUnit = 4;
    let x = Math.floor(Math.random() * (96 / spacingUnit)) * spacingUnit;
    let y = Math.floor(Math.random() * (96 / spacingUnit)) * spacingUnit;
    snakeBody.forEach(segment => {
      if (segment[0] === x && segment[1] === y) {
        this.generateRandomCoords();
      }
    });
    return [x, y];
  };

  checkSnakeCollision = () => {
    const snakeHead = [...this.state.snakeSegments[0]];
    const snake = [...this.state.snakeSegments];
    snake.shift();
    snake.forEach(segment => {
      if (segment[0] === snakeHead[0] && segment[1] === snakeHead[1]) {
        this.resetState()
      }
    });
  };

  resetState = () => {
    this.setState({
      gameOver: false,
      direction: "RIGHT",
      snakeSegments: [[48, 48], [44, 48], [40, 48]],
      foodCoords: null
    });
  };

  render() {
    let food;
    if (this.state.foodCoords) {
      food = <Food food={this.state.foodCoords} />;
    }

    return (
      <div className="game-grid">
        <SnakeBody snakeSegments={this.state.snakeSegments}></SnakeBody>
        {food}
      </div>
    );
  }
}

export default App;
