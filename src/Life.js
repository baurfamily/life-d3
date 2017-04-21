import React, { Component } from 'react';
import d3 from 'd3';

class Life extends Component {
  constructor() {
    super();
    this.state = {
      step: 0
    }
  }

  render() {
    return (
      <div>
        Grid:<br />
          <Grid />
        Controls:<br />
          <Stepper value={this.state.step} onClick={() => this.step() } />
      </div>
    )
  }

  step() {
    this.setState( {step: this.state.step + 1 });
    console.log("step", this.state.step)
  }
}

class Grid extends Component {
  constructor() {
    super();
    console.log("init of Grid class");

    this.state = {
      lifeData: [
        [ 0, 0, 1, 0, 1 ],
        [ 0, 0, 1, 1, 0 ],
        [ 0, 0, 0, 1, 0 ],
        [ 1, 0, 1, 0, 0 ],
        [ 0, 1, 1, 0, 0 ]
      ]
    }
  }

  render() {
    console.log("render of Grid class");
    return <svg className="life-grid"></svg>
  }
}

class Stepper extends Component {
  constructor() {
    super()
  }
  render() {
    return <button onClick={() => this.props.onClick()}>
      Click me! (step: {this.props.value})
    </button>
  }
}

export default Life;