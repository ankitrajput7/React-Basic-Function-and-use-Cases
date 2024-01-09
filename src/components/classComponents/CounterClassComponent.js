import React from "react";

class CounterClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("constructor 1");
  }

  componentDidMount() {
    console.log("componentdidMount 1");
  }

  componentDidUpdate(prevProp, prevState, snapshot) {
    console.log(prevProp, prevState, snapshot, "componentdidUpdate 1");
  }

  componentWillUnmount() {
    console.log("componentwillunmount");
  }

  render() {
    console.log("render 1");

    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState((prevState, prop) => {
              return {
                count: prevState.count + 1,
              };
            });
          }}
        >
          Update Count
        </button>
      </div>
    );
  }
}

export default CounterClassComponent;
