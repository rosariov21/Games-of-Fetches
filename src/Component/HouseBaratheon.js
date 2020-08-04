import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';
export default class HouseBaratheon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: []
    }
  }
  componentDidMount() {
    Axios.get("http://www.anapioficeandfire.com/api/houses/17/")
    .then(Response => {
      let HouseBaratheon=Response.data.house;
   
      this.setState({data:HouseBaratheon})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  }
  render() {
    return (
      <div>
        <h1>Q:What is the second seat of House Baratheon?</h1>
        <h3>The second seat of House Baratheon{this.state.data}.</h3>        
      </div>
    )
  }
}