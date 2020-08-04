import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';
export default class HouseLannister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: []
    }
  }
  componentDidMount() {
    Axios.get("http://www.anapioficeandfire.com/api/houses/229")
    .then(Response => {
      const HouseLannister=Response.data.coats;
      this.setState({data:HouseLannister})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  }
  render() {
    return (
      <div>
        <h1>Q: What's the coat of arms of House Lannister?</h1>
        <h3>A:the coat of arms of House Lannister is {this.state.data}.</h3>        
      </div>
    )
  }
}