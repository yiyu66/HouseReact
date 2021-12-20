import React, { Component } from "react";

export class HomeHot extends Component {
  constructor() {
    super();
    this.state = {
      homehot1: [],
      homehot2: [],
    };
  }
  componentDidMount() {
    // console.log(this.props.city);
    const city = this.props.city || localStorage.getItem("city") || "default";
    this.setState({ homehot1: city });
  }
  render() {
    const { homehot1, homehot2 } = this.state;
    return (
      <div>
        {homehot1.length > 0 ? <div>{homehot1}</div> : <div>正在请求数据</div>}
        {homehot2.length > 0 ? <div>{homehot2}</div> : <div>正在请求数据</div>}
      </div>
    );
  }
}

export default HomeHot;
