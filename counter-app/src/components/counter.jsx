import React, { Component } from "react";
// import { link } from "fs";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
    // imageUrl: "https://picsum.photos/200"
  };
  //   constructor() {
  //     super();
  //     console.log("constructor", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <span style={this.styles} className="badge badge-primary m-2"> */}
        {/* <span style={{ fontSize: 30 }} className="badge badge-primary m-2"> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //   onClick={this.handleIncrement}
          onClick={() => this.handleIncrement({ id: 1 })} //product not defined
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
