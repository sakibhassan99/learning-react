export function render(reactElement, rootElement) {
  function createDOMElement(reactElement) {
    if (reactElement == null) {
      return document.createTextNode("");
    }
    if (typeof reactElement.type === "function") {
      return createDOMElement(reactElement.type(reactElement.props));
    }

    if (Array.isArray(reactElement)) {
      return reactElement.map((el) => createDOMElement(el));
    }

    if (typeof reactElement === "string" || typeof reactElement === "number") {
      return document.createTextNode(reactElement);
    }

    const { type, props } = reactElement;
    const DOMElement = document.createElement(type);

    if (props) {
      Object.entries(props).forEach(([key, value]) => {
        if (key === "style") {
          Object.entries(value).forEach(([styleKey, styleValue]) => {
            DOMElement.style[styleKey] = styleValue;
          });
        } else {
          DOMElement[key] = value;
        }
      });

      props.children?.forEach((child) => {
        if (Array.isArray(child)) {
          DOMElement.append(...child.map((el) => createDOMElement(el)));
        } else if (typeof child === "string" || typeof child === "number") {
          const textNode = document.createTextNode(child);
          DOMElement.append(textNode);
        } else {
          DOMElement.append(createDOMElement(child));
        }
      });
    }

    return DOMElement;
  }

  const DOMElement = createDOMElement(reactElement);

  rootElement.innerHTML = "";
  if (Array.isArray(DOMElement)) {
    rootElement.append(...DOMElement);
  } else {
    rootElement.append(DOMElement);
  }
}

export default {
  render,
};
