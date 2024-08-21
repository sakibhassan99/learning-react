import { Component } from "react";
import withCounter from "./WithCounter";

class ClickCounter extends Component {
  render() {
    return (
      <>
        <h1 className="mx-4 mt-8">{this.props.name}</h1>
        <div className="m-8 flex items-center">
          <p
            onClick={this.props.increaseCount}
            className="center m-8 flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm bg-green-300 p-8 text-white"
          >
            {this.props.count}
          </p>
        </div>
      </>
    );
  }
}

export default withCounter(ClickCounter);
