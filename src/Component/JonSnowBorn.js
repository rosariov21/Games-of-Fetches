import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';
export default class JonSnowBorn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: []
    }
  }
  componentDidMount() {
    Axios.get("https://anapioficeandfire.com/api/characters/583")
    .then(Response => {
      let JonSnowBorn=Response.data.born;
    
      this.setState({data:JonSnowBorn})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  }
  render() {
    return (
      <div>
        <h1>Q: When was Jon Snow born?</h1>
        <h3>Jon Snow was born {this.state.data}.</h3>        
      </div>
    )
  }
}