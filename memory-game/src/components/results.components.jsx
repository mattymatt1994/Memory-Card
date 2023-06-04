import react, { Component } from "react";

class Results extends Component {
  render() {
    const { card } = this.props;

    return (
      <div>
        <p>"You're a wizard Harry.."</p>
        <p>Guess the cards as they appear!</p>
        <p>And maybe you can be a wizard one day and prove your magic skills</p>
        <p>Guess yes or no...GO!</p>
        <div className="d-flex justify-content-around align-items-center">
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    );
  }
}

export default Results;
