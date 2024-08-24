import React from "./React";
import App from "./App";
import { render } from "./react-dom";

function createElement(type, props, ...children) {
  const reactElement = {
    type,
    props: {
      ...props,
    },
  };
  if (children.length) reactElement.props.children = children;
  return reactElement;
}

let states = [];
let stateIndex = 0;

export const useState = (initialState) => {
  states[stateIndex] = states[stateIndex] || initialState;
  let localIndex = stateIndex;

  function setState(newState) {
    states[localIndex] = newState;
    stateIndex = 0;
    render(<App />, document.getElementById("root"));
  }
  stateIndex++;
  return [states[localIndex], setState];
};

export default {
  createElement,
};
