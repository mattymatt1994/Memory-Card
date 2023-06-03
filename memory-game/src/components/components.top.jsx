import react, { Component } from "react";

class Top extends Component {
  render() {
    const { currentScore, bestScore } = this.props;
    return (
      <header className="Card Game">
        <h1>Card Memory Game</h1>
        <div className="d-flex justify-content-around align-items-center">
          <div>
          <p>currentScore</p>
          <p>{currentScore}</p>
          </div>
          <div>
          <p>bestScore</p>
          <p>{bestScore}</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Top;
