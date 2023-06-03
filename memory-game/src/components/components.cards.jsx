import react, { Component } from "react";

class CardGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: ["AH","KH","QH","AD","KD","QD","AS","KS","QS","AC","KC","QC"],
      text: "",
     
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    let upDeck = [...this.state.cards, this.state.text];
    this.setState({cards: upDeck, text: ""});
  }

  render() {
    const {currentScore, bestScore} = this.state;
    return (
      <div>
        <h1>Who wants to play a game of cards?</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            value={this.state.text}
            onChange={(event) => this.setState({ text: event.target.value })}
          />
          <button type="submit">Add a Card</button>
        </form>

        <ul>
          {this.state.cards.map((cards, idx) => {
            return <li key={cards + idx}>{cards}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default CardGame;