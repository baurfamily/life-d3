import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class Life extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      lifeData: [
        [ 0, 0, 1, 0, 1, 0, 0 ],
        [ 0, 0, 1, 1, 0, 0, 1, 0, 1 ],
        [ 0, 0, 0, 1, 0 ],
        [ 1, 0, 1, 0, 0 ],
        [ 0, 1, 1, 0, 0 ],
        [ 0, 0, 1, 1, 0 ],
        [ 0, 0, 0, 1, 0 ],
        [ 1, 0, 1, 0, 0 ],
        [ 0, 1, 1, 0, 0 ]
      ]
    }
  }

  render() {
    return (
      <div>
        Controls:<br />
          <Stepper value={this.state.step} onClick={() => this.step() } />
        Grid:<br />
          <Grid value={this.state.lifeData} step={this.state.step} onClick={() => this.step() }/>
      </div>
    )
  }

  step() {
    this.setState( {step: this.state.step + 1 });
    this.randomize()
  }

  randomize() {
    var newArray = []
    for ( var i=0; i<10; i++ ) {
      var rowArray = []
      for ( var j=0; j<10; j++ ) {
        rowArray.push( Math.floor(Math.random() + 0.5))
      }
      newArray.push( rowArray )
    }
    this.state.lifeData = newArray
  }
}

class Grid extends Component {
  constructor(props) {
    super();
    this.state = {
      width: 500,
      height: 500
    }
  }

  render() {
    var rows = this.props.value.length
    var columns_counts = this.props.value.map((row, index) => { return row.length })
    var max_columns = Math.max( ...columns_counts )

    return <div>
      <svg id="life-grid"  width={this.state.width} height={this.state.height} style={{fill: 'red'}}>
        {this.props.value.map((row, index) => {
          return <Row
            value={this.props.value[index]}
            y={index} key={index}
            width={this.state.width}
            height={this.state.height / rows}
            columns={max_columns}
          />
        })}
      </svg>
    </div>
  }

  componentDidMount() {
    console.log("componentDidMount")
    this.loadData(this.props.value)
  }

  loadData(newData) {
    //console.log("might be loading data\n",newData)
  }

  onClick() {
    console.log("clicked grid")
    this.loadData()
  }
}

class Row extends Component {  
  render() {
    //console.log("render Row("+this.props.key+"): ",this.props.value)
    return (
      <g>
        {this.props.value.map((row, index) => {
          return <Square
            value={this.props.value[index]}
            height={this.props.height}
            width={this.props.width / this.props.columns}
            x={index}
            y={this.props.y}
            key={this.props.key+'_'+index}
          />
        })}
      </g>
    )
  }
}

class Square extends Component {
  render() {
    //console.log("render Square("+this.props.x+","+this.props.y+"): ",this.props.value)
    return <rect
      key={this.props.x+"_"+this.props.y}
      width={this.props.width}
      height={this.props.height}
      x={this.props.x * this.props.width}
      y={this.props.y * this.props.height}
      style={{
        fill: (this.props.value==1 ? 'grey' : 'black' ),
        strokeWidth: 3,
        stroke: 'black'
      }}
    />
  }
}

class Stepper extends Component {
  render() {
    return <button onClick={() => this.props.onClick()}>
      Click me! (step: {this.props.value})
    </button>
  }
}

export default Life;