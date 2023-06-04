import react, { Component } from "react";

const cards = [
  "AH",
  "KH",
  "QH",
  "AD",
  "KD",
  "QD",
  "AS",
  "KS",
  "QS",
  "AC",
  "KC",
  "QC",
];

for (let i = 0; i < 15; i++) {
  cards.push({
    id: i,
    content: String.fromCharCode(i),
    display: false,
  });
}

class Top extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards,
   
  };}

  render() {
    const { currentScore, bestScore } = this.props;

    return (
      <header className="Card Game">
        <h1>Card Memory Game</h1>
        <div className="d-flex justify-content-around align-items-center">
          <div>
            <p>Current Score</p>
            <p>{currentScore}</p>
          </div>
          <div>
            <p>Best Score</p>
            <p>{bestScore}</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Top;
