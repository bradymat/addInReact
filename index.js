import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter1: 0,
      counter2: 0
    }
  }
  increment(counterName){
    console.log('state', this.state[counterName]);
    var state = {}
    state[counterName] = this.state[counterName]+1
    this.setState(state)
  }
  render(){
    return (
      <div>
        <Greeter name='Brady'/>
        <Greeter name='Steve'/>
        <Counter
          name='counter1'
          count={this.state.counter1}
          increment={this.increment.bind(this)}/>
        <Counter
          name='counter2'
          count={this.state.counter2}
          increment={this.increment.bind(this)}/>
        <Total
          count={this.state.counter1 + this.state.counter2}/>
      </div>
    )
  }
}

class Greeter extends React.Component {
  render() {
    return <h1> Morohi {this.props.name}</h1>
  }
}

class Counter extends React.Component {
  handleClick () {
    this.props.increment(this.props.name)
    console.log('handleClick')
  }
  render() {
    console.log( 'props', this.props);
    return <h2 onClick={ () => this.handleClick()}> My count is: {this.props.count} </h2>
  }
}

class Total extends React.Component {
  render(){
    return <h2> Total: {this.props.count}</h2>
  }
}

// class Total extends React.Component{
//
//
//   return <h2> {this.state.count} </h2>
// }
render(<App/>, document.querySelector('main'))

// render(<App name='Lit Shit' />, document.querySelector('main'))
// console.log('welcome to Lit Shit')
