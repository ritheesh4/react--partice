import React from 'react';

import './App.css';


class Counter extends React.Component {
  state = {
    count: 0,
    classNameButton : "button"
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));if( this.state.count > 1){
      this.setState({classNameButton}) ({
        classNameButton: "button-one"
      })
    }
    
  };
  
  render() {
    return <button onClick={this.handleClick} className = {this.state.classNameButton}>{this.state.count}</button>;
  }
}


class Decrementer extends React.Component {
  state = {
    count: 10
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count -1
    }));
  };
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}



function App() {
  return (
    <header>
      <div className="App">
        <h1>Hello</h1>
        <div className="flex-container">
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </div>
        <div className="flex-container">
          <div>hello</div>
          <div>hello</div>
        </div>
        <div className="flex-container-two">
          <div className="box">
            <div>this is one</div>
            <div>this is two</div>
            <div>this is two</div>
          </div>
          <div className="box">
            <div>this is one</div>
            <div>this is two</div>
            <div>this is two</div>
          </div>
         
        </div>
     <Counter className ={this.state.classNameButton}/>
     <Decrementer/>

      </div>
    </header>
  );
}

export default App;
