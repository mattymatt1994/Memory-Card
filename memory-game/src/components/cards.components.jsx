import react, { Component } from "react";
import Results from "./results.components";

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
    displayed: false,
  });
}

class CardGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards,
    };
  }

  pickCard(event, id, answer) {
    this.props.cardChoice(this.state.cards[id].displayed === answer);

    if (!this.state.cards[id].content) {
      const upDeck = this.state.cards.map((card) => {
        if (card.displayed) {
          return card;
        } else {
          card.displayed = true;
          return card;
        }
      });
      this.setState({cards: upDeck});
    }
  }

  shuffleDeck() {
    let shuffle = Math.floor(Math.random() * cards.length);
    return shuffle;
  }

  render() {
    const { cards } = this.state;
    const card = cards[this.shuffleDeck()];
    return (
      <main className="d-flex justify-content-around align-items-centers">
        <p>{card.content}</p>
        <Results card={card} pickCard={this.pickCard} />
      </main>
    );
  }
}

export default CardGame;
