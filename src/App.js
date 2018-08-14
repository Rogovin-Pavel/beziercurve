import React, { Component } from 'react';
import BezierEditor from 'bezier-easing-editor';

class App extends Component {
  state = {
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Bezier-title">Bezier Curve</h1>
          <BezierEditor value={this.state.val} onChange={val => this.setState({ val })} />
        </header>
      </div>
    );
  }
}

export default App;
