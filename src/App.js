import React, { Component } from "react";
import ScrollArea from "react-scrollbar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsCount: 100
    };
  }

  handleScroll(scrollData) {
    console.log(scrollData);
  }

  render() {
    var itemElements = [];

    for (var i = 0; i < this.state.itemsCount; i++) {
      itemElements.push(
        <div className="item" key={i}>
          item {i}
        </div>
      );
    }

    return (
      <div>
        <ScrollArea
          className="area"
          contentClassName="content"
          smoothScrolling={true}
          onScroll={this.handleScroll}
        >
          {itemElements}
        </ScrollArea>
      </div>
    );
  }
}

export default App;
