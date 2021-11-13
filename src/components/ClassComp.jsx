import React, { Component } from "react";
import { Button } from 'antd-mobile'
export class ClassComp extends Component {
  // constructor(props) {
  //     super(props)
  //     this.state = {
  //          times:1
  //     }
  // }
  //简介做法ES6
  state = {
    count: 0,
  };
  ontest(){
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <h2>计数器: {this.state.count}</h2>
        <Button color='primary'
          onClick={()=>this.ontest()}
        >
          +1
        </Button>
      </div>
    );
  }
}

export default ClassComp;
