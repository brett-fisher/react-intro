import React from 'react'
import ReactDOM from 'react-dom'

class Name extends React.Component {
  render() {
    return (
      <h1>{this.props.text}</h1>
    );
  }
}
  
class Mood extends React.Component {
  render() {
    return (
      <h2>{this.props.text}</h2>
    );
  }
}
  
class Glue extends React.Component {
  render() {
    return (
      <div>
        <Name text='Chris'/>
        <Mood text='Quiet'/>
      </div>
    );
  }
}

ReactDOM.render(
  <Glue />,
  document.getElementById('app')
)                
                