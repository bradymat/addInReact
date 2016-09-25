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
  render(){
    return (
      <div>
        <Greeter name='Brady'/>
        <Greeter name='Steve'/>
        <Counter count={this.state.counter1}/>
        <Counter count={this.state.counter2}/>
        {/*<Total/>*/}
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
  increaseCount () {
    this.setState({count: this.state.count + 7})
  }
  render() {
    console.log(this.props);
    return <h2> My count is: {this.props.count} </h2>
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
