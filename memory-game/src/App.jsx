import CardGame from "./components/components.cards.jsx";
import Top from "./components/components.top.jsx";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      bestScore: 0,
    };
  }
  render() {
    const { currentScore, bestScore } = this.state;
    return (
      <div className="App">
        <header className="App-header"></header>
        <CardGame />
        <Top currentScore={currentScore} bestScore={bestScore}/>
      </div>
    );
  }
}

export default App;
