import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';
export default class RobertB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: []
    }
  }
  componentDidMount() {
    Axios.get("http://www.anapioficeandfire.com/api/houses/17").then(res => {
      const RobertB=res.data.alias;
      this.setState({data:RobertB})
    })
  }
  render() {
    return (
      <div>
        <h2> What is Robert Baratheon's second alias?</h2>
        <h4> Robert Baratheon's second alias is {this.state.data}.</h4>
      </div>
    )
  }
}