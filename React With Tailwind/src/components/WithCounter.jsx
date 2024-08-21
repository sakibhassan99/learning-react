import { Component } from "react";

const withCounter = (WrappedComponent) => {
  return class WithCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    increaseCount = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <WrappedComponent
          name={this.props.name}
          increaseCount={this.increaseCount}
          count={this.state.count}
        />
      );
    }
  };
};

export default withCounter;
